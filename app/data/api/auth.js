import store from '../redux/store';
import {
  logOut,
  logIn,
  verifyOTP,
  refreshAccessToken,
} from '../redux/reducers/User';
import {selectStudentId} from '../redux/reducers/Student';
import {API_URL} from './utils';
import {persistor} from '../redux/store';
import {realmDB} from '../db';
const {
  user: {accessToken},
} = store.getState();

export const loginUser = async (email, password) => {
  try {
    const request = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    const response = await request.json();

    console.log('>> loginUser response: ', response);

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      store.dispatch(logIn(response));
      return {
        success: true,
        message: 'Login successfull.',
      };
    }
  } catch (error) {
    return {error};
  }
};

export const loginUserWithPhone = async (phone, password) => {
  try {
    const request = await fetch(`${API_URL}/auth/loginWithPhone`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({phone, password}),
    });

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      store.dispatch(logIn(response));
      return {
        success: true,
        message: 'Login successfull.',
      };
    }
  } catch (error) {
    return {error};
  }
};

export const verifyOTPUser = async (userId, otp, sessionToken) => {
  try {
    const request = await fetch(`${API_URL}/auth/verifyOTP`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userId, sessionToken, otp}),
    });

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      const userRes = JSON.parse(JSON.stringify(response.user));

      const payloadVerifyOtp = {
        user: userRes,
        accessToken: response.accessToken,
        sessionToken: response.sessionToken,
      };

      console.log('>> payloadVerifyOtp: ', payloadVerifyOtp);

      store.dispatch(verifyOTP(payloadVerifyOtp));

      realmDB.user.create({
        id: userRes.id,
        username: userRes.username,
        email: userRes.email,
        phone: userRes.phone,
        role_id: userRes.role_id,
        set_school_id: userRes.set_school_id,
        role: userRes.role,
        picture: userRes.picture,
        accessToken: response.accessToken,
        sessionToken: response.sessionToken,
        isLoggedIn: true,
        loginAt: new Date(),
      });

      if (userRes.role_id === 13) {
        const students = JSON.parse(JSON.stringify(response.students));
        realmDB.students.createStudents(students);

        if (students.length) {
          store.dispatch(selectStudentId(Number(students[0].student_id)));
        }
      }

      return {
        success: true,
        message: 'OTP verification successfull.',
        token: response.accessToken,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const refreshToken = async () => {
  const findUser = realmDB.user.getUsers();

  if (!findUser || findUser.isLoggedIn === false) {
    return false;
  }

  try {
    const request = await fetch(`${API_URL}/auth/refreshToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: findUser.id,
        sessionToken: findUser.sessionToken,
        accessToken: findUser.accessToken,
        isLoggedIn: findUser.isLoggedIn,
      }),
    });

    const response = await request.json();

    console.log('>> refreshToken: ', response);

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      const userRes = JSON.parse(JSON.stringify(response.user));
      realmDB.user.create({
        id: userRes.id,
        username: userRes.username,
        email: userRes.email,
        phone: userRes.phone,
        role_id: userRes.role_id,
        set_school_id: userRes.set_school_id,
        role: userRes.role,
        picture: userRes.picture,
        accessToken: response.accessToken,
        sessionToken: response.sessionToken,
        isLoggedIn: true,
        loginAt: new Date(),
      });

      store.dispatch(refreshAccessToken(response.accessToken));
    }
  } catch (error) {
    return {error};
  }
};

export const changePassword = async newPassword => {
  const findUser = realmDB.user.getUsers();

  try {
    const request = await fetch(
      `${API_URL}/auth/changePassword/${findUser.id}`,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({password: newPassword}),
      },
    );

    const response = await request.json();

    console.log('>> changePassword findUser.id: ', findUser.id);
    console.log('>> changePassword: ', response);

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      return {
        success: true,
        message: 'Kata sandi berhasil diubah...',
      };
    }
  } catch (error) {
    return {error};
  }
};

export const logOutUser = async () => {
  realmDB.user.deleteAllData();
  store.dispatch(logOut());
  persistor.purge();
};
