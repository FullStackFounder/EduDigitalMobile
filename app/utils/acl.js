import {realmDB} from '../data/db';

export const getPermissions = student_id => {
  let permissions = realmDB.students.getAllStudentFeatures();
  permissions = permissions.filter(e => e.student_id === student_id);

  return permissions;
};
