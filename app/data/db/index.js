import UserDB from './services/User';
import StudentDB from './services/Students';

export const realmDB = {
  user: UserDB,
  students: StudentDB,
};
