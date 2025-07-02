import store from '../redux/store';
import {API_URL} from './utils';
import {realmDB} from '../db';
const {
  user: {accessToken, user},
} = store.getState();

const findUser = realmDB.user.getUsers();

export const getNotifications = async () => {
  try {
    let recipient = 'SCHOOL';
    if (user.role === 'Orang Tua') {
      recipient = 'PARENT';
    } else if (user.role === 'Siswa') {
      recipient = 'STUDENT';
    } else if (user.role === 'Guru') {
      recipient = 'TEACHER';
    }

    const request = await fetch(
      `${API_URL}/notifications?recipient=${recipient}&receiver=${findUser.id}&school_id=${findUser.set_school_id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const response = await request.json();

    if (response?.response?.error) {
      return {
        success: false,
        error: response.response.message,
        statusCode: response.response.statusCode,
      };
    } else {
      return {
        success: true,
        notifications: response.notifications,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const getNotification = async id => {
  try {
    const request = await fetch(`${API_URL}/notifications/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response = await request.json();

    if (response?.response?.error) {
      return {
        success: false,
        error: response.response.message,
        statusCode: response.response.statusCode,
      };
    } else {
      return {
        success: true,
        notification: response.notification,
      };
    }
  } catch (error) {
    return {error};
  }
};
