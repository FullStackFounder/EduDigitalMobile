import Realm from 'realm';
import {Realm as RealmReact} from '@realm/react';

export class Student extends Realm.Object {
  static schema = {
    name: 'Student',
    properties: {
      student_id: 'int',
      user_id: 'int',
      nisn: 'string',
      student_name: 'string',
      sex: 'string',
      birth_place: 'string',
      birth_date: 'string',
      address: 'string',
      picture: 'string',
      school_id: 'string',
      school_name: 'string',
      school_logo: 'string',
      school_phone: 'string',
      school_email: 'string',
      classes: 'StudentClasses[]',
    },
    primaryKey: 'student_id',
  };
}

export class StudentClasses extends Realm.Object {
  // static generate() {
  //   return {
  //     _id: new RealmReact.BSON.UUID().toString(),
  //   };
  // }
  static schema = {
    name: 'StudentClasses',
    properties: {
      _id: 'string',
      student_id: 'int',
      class_id: 'int',
      level_id: 'int',
      majors_id: 'int',
      class_name: 'string',
      academic_year_id: 'int',
      academic_year: 'string',
      is_active: {type: 'bool', default: false},
    },
    primaryKey: '_id',
  };
}

export class StudentFeatures extends Realm.Object {
  // static generate() {
  //   return {
  //     _id: new RealmReact.BSON.UUID().toString(),
  //   };
  // }
  static schema = {
    name: 'StudentFeatures',
    properties: {
      _id: 'string',
      student_id: 'int',
      feature_id: 'int',
    },
    primaryKey: '_id',
  };
}
