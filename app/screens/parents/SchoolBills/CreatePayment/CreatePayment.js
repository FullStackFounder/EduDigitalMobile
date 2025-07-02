import React from 'react';
import {SafeAreaView, View, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AppBar} from '@react-native-material/core';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';
import BulananSemester from './BulananSemester';
import Others from './Others';

const CreatePayment = ({route, navigation}) => {
  const {studentBill, studentBillDetails} = route.params;
  const {theme} = useSelector(state => state.theme);

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View
        style={[globalStyle.main, {backgroundColor: theme.b, marginTop: 15}]}>
        <AppBar
          style={{backgroundColor: theme.b}}
          elevation={0}
          centerTitle={true}
          title="Pembayaran Tagihan Sekolah"
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
          {['Bulanan', 'Semester'].includes(studentBill.bill_type) && (
            <BulananSemester
              studentBill={studentBill}
              studentBillDetails={studentBillDetails}
            />
          )}

          {studentBill.bill_type !== 'Bulanan' &&
            studentBill.bill_type !== 'Semester' && (
              <Others studentBill={studentBill} />
            )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CreatePayment;
