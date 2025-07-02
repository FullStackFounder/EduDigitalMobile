import store from '../redux/store';
import {API_URL} from './utils';
import {getSelectedStudentProfile} from './studentsReq';
import {getFileExtension} from '../../helper/pickerHelper';
const {
  user: {accessToken},
} = store.getState();

export const getPaymentMethods = async () => {
  const student = await getSelectedStudentProfile();

  try {
    const request = await fetch(
      `${API_URL}/school-payments/getPaymentMethods?school_id=${student.school_id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const response = await request.json();

    console.log('>> getPaymentMethods: ', response);

    if (response?.error) {
      return {
        success: false,
        error: response.response.message,
        statusCode: response.response.statusCode,
      };
    } else {
      return {
        success: true,
        paymentMethods: response.paymentMethods,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const createPaymentByUpload = async (
  transaction,
  transactionDetail = [],
  transactionPayment,
  school_id,
  paymentProof,
) => {
  try {
    const details = [];
    for (const x of transactionDetail) {
      details.push(JSON.stringify(x));
    }

    const data = {
      transaction: JSON.stringify(transaction),
      transactionDetail: details,
      transactionPayment: JSON.stringify(transactionPayment),
      school_id,
    };

    const request = await fetch(
      `${API_URL}/school-payments/createPaymentByUpload`,
      {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      },
    );

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      await goUpload(paymentProof, school_id);
      return {
        success: true,
        schoolPayment: response.schoolPayment,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const goUpload = async (paymentProof, school_id) => {
  const formData = new FormData();
  formData.append('file', paymentProof);
  formData.append('file_name', paymentProof.name);
  formData.append('school_id', school_id);
  const request = await fetch(`${API_URL}/school-payments/goUpload`, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const response = await request.json();

  console.log('>> goUpload: ', response);

  if (response?.error) {
    return {
      success: false,
      error: response.message,
    };
  } else {
    return {
      success: true,
      paymentMethods: response.paymentMethods,
    };
  }
};

export const reUploadPaymentProof = async (transaction, paymentProof) => {
  try {
    const request = await fetch(
      `${API_URL}/school-payments/reUploadPaymentProof/${transaction.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          file: paymentProof.name,
        }),
      },
    );

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      await goUpload(paymentProof);
      return {
        success: true,
        schoolPayment: response.schoolPayment,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const getPaymentProof = async id => {
  try {
    const request = await fetch(
      `${API_URL}/school-payments/getPaymentProof/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      return {
        success: true,
        payment: response.paymentProof,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const deletePayment = async id => {
  try {
    const request = await fetch(
      `${API_URL}/school-payments/deletePayment/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      return {
        success: true,
        schoolPayment: response.schoolPayment,
      };
    }
  } catch (error) {
    return {error};
  }
};
