import {Realm as RealmReact} from '@realm/react';
import {Student, StudentClasses, StudentFeatures} from '../models/Students';
import realm from './realmService';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const StudentDB = {
  getAllStudents: () => realm.objects(Student),

  getAllStudentClasses: () => realm.objects(StudentClasses),

  getAllStudentFeatures: () => realm.objects(StudentFeatures),

  createStudents: students => {
    for (const student of students) {
      console.log('>> createStudents student: ', student);
      try {
        const data = {
          student_id: Number(student.id),
          user_id: Number(student.user_id),
          nisn: student.nisn,
          student_name: student.student_name,
          sex: student.sex,
          birth_place: student.birth_place,
          birth_date: student.birth_date,
          address: student.address,
          picture: student.picture,
          school_id: student.school_id,
          school_name: student.school_name,
          school_logo: student.logo,
          school_phone: student.phone,
          school_email: student.email,
        };
        realm.write(() => {
          realm.create(Student, data);
        });

        for (const rowClass of student.classes) {
          try {
            const insertClass = {
              _id: uuidv4(),
              student_id: Number(rowClass.student_id),
              class_id: Number(rowClass.class_id),
              level_id: Number(rowClass.level_id),
              majors_id: Number(rowClass.majors_id),
              class_name: rowClass.class_name,
              academic_year_id: Number(rowClass.academic_year_id),
              academic_year: rowClass.academic_year,
              is_active: rowClass.is_active === 1 ? true : false,
            };
            realm.write(() => {
              realm.create(StudentClasses, insertClass);
            });
          } catch (error) {
            console.log('>> Error create student classes: ', error);
          }
        }

        for (const rowFeature of student.studentFeatures) {
          try {
            const insertFeature = {
              _id: uuidv4(),
              student_id: Number(rowFeature.student_id),
              feature_id: Number(rowFeature.feature_id),
            };
            realm.write(() => {
              realm.create(StudentFeatures, insertFeature);
            });
          } catch (error) {
            console.log('>> Error create student features: ', error);
          }
        }
      } catch (error) {
        console.log('>> Error create student: ', error);
      }
    }
  },

  createStudentClasses: studentClasses => {
    for (const student of studentClasses) {
      try {
        const data = {
          _id: RealmReact.BSON.ObjectID,
          student_id: student.student_id,
          class_id: student.class_id,
          level_id: student.level_id,
          majors_id: student.majors_id,
          class_name: student.class_name,
          academic_year_id: student.academic_year_id,
          academic_year: student.academic_year,
          is_active: student.is_active,
        };
        realm.write(() => {
          realm.create(StudentClasses, data);
        });
      } catch (error) {
        console.log('>> Error create student classes: ', error);
      }
    }
  },
};

export default StudentDB;
