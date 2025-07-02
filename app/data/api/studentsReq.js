import store from '../redux/store';
import {API_URL} from './utils';
import {realmDB} from '../db';
const {
  user: {accessToken},
  student: {selectedStudentId},
} = store.getState();

export const getSelectedStudentProfile = async () => {
  const selectedStudent = realmDB.students
    .getAllStudents()
    .find(e => e.student_id === selectedStudentId);

  return selectedStudent;
};
