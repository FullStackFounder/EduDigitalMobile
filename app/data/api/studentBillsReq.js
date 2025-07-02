import store from '../redux/store';
import {API_URL} from './utils';
const {
  user: {accessToken},
} = store.getState();

export const getStudentBillsByAcademicYear = async (
  student_id,
  academic_year_id,
) => {
  try {
    const request = await fetch(
      `${API_URL}/student-bills/getStudentBillsByAcademicYear?student_id=${student_id}&academic_year_id=${academic_year_id}`,
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
        studentBills: response.studentBills,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const getStudentBillDetails = async (
  student_id,
  school_bill_id,
  bill_type,
) => {
  try {
    const request = await fetch(
      `${API_URL}/student-bills/getStudentBillDetails?student_id=${student_id}&school_bill_id=${school_bill_id}&bill_type=${bill_type}`,
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
        studentBillDetails: response.studentBillDetails,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const getTransactionHistoryByAcademicYear = async (
  student_id,
  academic_year_id,
) => {
  try {
    const request = await fetch(
      `${API_URL}/student-bills/getTransactionHistoryByAcademicYear?student_id=${student_id}&academic_year_id=${academic_year_id}`,
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
        transactionHistory: response.transactionHistory,
      };
    }
  } catch (error) {
    return {error};
  }
};

export const getInvoice = async id => {
  try {
    const request = await fetch(`${API_URL}/student-bills/getInvoice/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response = await request.json();

    if (response?.error) {
      return {
        success: false,
        error: response.message,
      };
    } else {
      return {
        success: true,
        invoice: response.invoice,
      };
    }
  } catch (error) {
    return {error};
  }
};
