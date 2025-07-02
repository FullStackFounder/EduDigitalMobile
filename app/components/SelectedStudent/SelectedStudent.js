/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';

import globalStyle from '../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';
import {realmDB} from '../../data/db';

const SelectedStudent = props => {
  const {theme} = useSelector(state => state.theme);
  const {selectedStudentId} = useSelector(state => state.student);
  const [student, setStudent] = useState({});
  const [avatar, setAvatar] = useState(
    require('../../../assets/images/avatar/avatar1.png'),
  );

  useEffect(() => {
    const selectedStudent = realmDB.students
      .getAllStudents()
      .find(e => e.student_id === selectedStudentId);

    const myAvatar =
      student.picture === ''
        ? require('../../../assets/images/avatar/avatar1.png')
        : {
            uri: `https://appso.id/schools/${student.school_id}/users/students/${student.picture}`,
          };

    setStudent(selectedStudent);
    setAvatar(myAvatar);
  }, [selectedStudentId, student.picture, student.school_id]);

  return (
    <View style={[style.studentRowContainer, {backgroundColor: theme.back}]}>
      <Avatar.Image
        source={avatar}
        style={{backgroundColor: theme.back}}
        size={55}
      />
      <View style={style.studentNameContainer}>
        <Text style={[globalStyle.b16, {color: theme.txt}]}>
          {student.student_name}
        </Text>
        <Text style={[globalStyle.r12, {color: theme.disable, marginTop: 5}]}>
          {student.school_name}
        </Text>
      </View>
    </View>
  );
};

export default SelectedStudent;
