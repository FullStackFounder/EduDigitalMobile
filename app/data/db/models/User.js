import Realm from 'realm';
import {Realm as RealmReact} from '@realm/react';

export class User extends Realm.Object {
  static schema = {
    name: 'User',
    properties: {
      id: 'int',
      username: 'string',
      email: 'string',
      phone: 'string',
      role_id: 'int',
      set_school_id: 'string',
      role: 'string',
      picture: 'string',
      accessToken: 'string',
      sessionToken: 'string',
      isLoggedIn: {type: 'bool', default: false},
      loginAt: 'date',
    },
    primaryKey: 'id',
  };
}
