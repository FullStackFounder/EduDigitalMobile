import {User} from '../models/User';
import realm from './realmService';

const UserDB = {
  getAllUsers: () => realm.objects(User),

  //Addition of user
  create: user => {
    try {
      const data = {
        id: user.id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role_id: user.role_id,
        set_school_id: user.set_school_id,
        role: user.role,
        picture: user.picture,
        accessToken: user.accessToken,
        sessionToken: user.sessionToken,
        isLoggedIn: user.isLoggedIn,
        loginAt: new Date(),
      };

      realm.write(() => {
        realm.create(User, data, 'modified');
      });
    } catch (error) {
      console.log('>> Error create user: ', error);
    }
  },

  getUsers: () => realm.objects(User)[0],

  deleteAllData: () => {
    try {
      realm.write(() => {
        realm.deleteAll();
      });
    } catch (error) {
      console.log('>> Error delata all: ', error);
    }
  },
};

export default UserDB;
