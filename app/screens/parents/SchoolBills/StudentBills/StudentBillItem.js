import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';
import {rupiah} from '../../../../utils/common';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

const StudentBillItem = props => {
  const {studentBill} = props;
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <View
      style={[{backgroundColor: theme.back}, style.studentBillItemContainer]}>
      {/* <Avatar.Image
        source={require('../../../../assets/images/b13.png')}
        style={{backgroundColor: theme.back}}
        size={35}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={style.studentBillInformation}>
          <Text style={[globalStyle.b16, {color: theme.txt}]}>
            {studentBill.bill_name}
          </Text>
          <Text
            style={[
              globalStyle.r12,
              {color: theme.disable},
              style.studentBillNominal,
            ]}>
            {studentBill.bill_type} -{' '}
            {Number(studentBill.nominal_set) === 1
              ? rupiah(Number(studentBill.nominal))
              : 'Nominal bayar dibebaskan'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.StudentBillDetail, {
              studentBill,
            })
          }
          style={[{borderColor: theme.border}, style.studentBillButton]}>
          <Text style={[globalStyle.b12, {color: theme.txt}]}>Rincian</Text>
          <Icon
            name="arrow-forward-outline"
            size={15}
            color={theme.txt}
            style={style.studentBillIcon}
          />
        </TouchableOpacity>
      </View>
      <Divider
        style={[
          globalStyle.divider,
          {
            backgroundColor: theme.border,
            marginVertical: 10,
            flex: 1,
          },
        ]}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={style.studentBillInformation}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Avatar.Image
              source={theme.paid}
              style={{backgroundColor: theme.back}}
              size={16}
            />
            <Text
              style={[globalStyle.r12, {color: theme.disable, marginLeft: 8}]}>
              {rupiah(Number(studentBill.total_amount_paid))}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            source={theme.debt}
            style={{backgroundColor: theme.back}}
            size={16}
          />
          <Text
            style={[globalStyle.r12, {color: theme.disable, marginLeft: 8}]}>
            {rupiah(Number(studentBill.total_amount_unpaid))}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StudentBillItem;
