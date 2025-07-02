import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AppBar} from '@react-native-material/core';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';
import SelectedStudent from '../../../../components/SelectedStudent/SelectedStudent';
import DetailBulananSemester from './DetailBulananSemester';
import DetailOthers from './DetailOthers';

const StudentBillDetail = ({route, navigation}) => {
  const {studentBill} = route.params;
  const {theme} = useSelector(state => state.theme);

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View
        style={[globalStyle.main, {backgroundColor: theme.b, marginTop: 15}]}>
        <AppBar
          style={{backgroundColor: theme.b}}
          elevation={0}
          centerTitle={true}
          title="Tagihan Sekolah"
          titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
          leading={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Avatar.Icon
                icon="arrow-left"
                style={{backgroundColor: theme.btnbg}}
                color={theme.txt}
                size={45}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SelectedStudent />
          {['Bulanan', 'Semester'].includes(studentBill.bill_type) && (
            <DetailBulananSemester studentBill={studentBill} />
          )}

          {studentBill.bill_type !== 'Bulanan' &&
            studentBill.bill_type !== 'Semester' && (
              <DetailOthers studentBill={studentBill} />
            )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default StudentBillDetail;
