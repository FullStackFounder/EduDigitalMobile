/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, RadioButton} from 'react-native-paper';

import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

import PropTypes from 'prop-types';

const StudentRow = props => {
  const {theme} = useSelector(state => state.theme);
  const {student, selectedStudent, onPress} = props;

  const avatar =
    student.picture === ''
      ? require('../../../../assets/images/avatar/avatar1.png')
      : {
          uri: `https://appso.id/schools/${student.school_id}/users/students/${student.picture}`,
        };

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
      <RadioButton
        value={student.student_id}
        status={
          selectedStudent === student.student_id ? 'checked' : 'unchecked'
        }
        onPress={() => onPress(student.student_id)}
        color={Colors.primary}
        uncheckedColor={theme.disable}
      />
    </View>
  );
};

StudentRow.default = {
  onPress: () => {},
};

StudentRow.propTypes = {
  student: PropTypes.object.isRequired,
  selectedStudent: PropTypes.number,
  onPress: PropTypes.func,
};

export default StudentRow;
