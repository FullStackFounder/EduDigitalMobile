import Realm from 'realm';
import {User} from '../models/User';
import {Student, StudentClasses, StudentFeatures} from '../models/Students';

const realm = new Realm({
  schema: [User, Student, StudentClasses, StudentFeatures],
});

export default realm;
