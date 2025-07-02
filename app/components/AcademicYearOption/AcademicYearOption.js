import React from 'react';
import {View, Text} from 'react-native';
import {RadioButton} from 'react-native-paper';

import {Colors} from '../theme/color';
import globalStyle from '../theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

const AcademicYearOption = props => {
  const {theme} = useSelector(state => state.theme);

  const {selectedAcademicYearID, academicYear, onPress} = props;

  return (
    <View style={[style.container, {backgroundColor: theme.back}]}>
      <Text style={[globalStyle.b14, {color: theme.txt}]}>
        {academicYear.academic_year} - {academicYear.class_name}
      </Text>
      <RadioButton
        value={academicYear.academic_year_id}
        status={
          selectedAcademicYearID === academicYear.academic_year_id
            ? 'checked'
            : 'unchecked'
        }
        onPress={() => onPress(academicYear.academic_year_id)}
        color={Colors.primary}
        uncheckedColor={theme.disable}
      />
    </View>
  );
};

export default AcademicYearOption;
