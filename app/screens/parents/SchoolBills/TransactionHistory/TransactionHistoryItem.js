import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Divider, Chip} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';
import {rupiah} from '../../../../utils/common';
import {format} from 'date-fns';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

const TransactionHistoryItem = props => {
  const {transactionHistory} = props;
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <View
      style={[{backgroundColor: theme.back}, style.studentBillItemContainer]}>
      <View style={style.studentBillItemMainContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={style.studentBillInformation}>
            <Text style={[globalStyle.b16, {color: theme.txt}]}>
              {'No. ' +
                transactionHistory.transaction_no.substr(
                  transactionHistory.transaction_no.length - 11,
                )}
            </Text>
            <Text
              style={[
                globalStyle.r12,
                {color: theme.disable},
                style.studentBillNominal,
              ]}>
              {'Jumlah: ' + rupiah(transactionHistory.total_amount)}
            </Text>
          </View>
          {transactionHistory.status == 1 && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(Routes.Invoice, {
                  transaction: transactionHistory,
                });
              }}
              style={[{borderColor: theme.border}, style.studentBillButton]}>
              <Text style={[globalStyle.b12, {color: theme.txt}]}>Cetak</Text>
              <Icon
                name="print-outline"
                size={15}
                color={theme.txt}
                style={style.studentBillIcon}
              />
            </TouchableOpacity>
          )}
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
                source={theme.user}
                style={{backgroundColor: theme.back}}
                size={16}
              />
              <Text
                style={[
                  globalStyle.r12,
                  {color: theme.disable, marginLeft: 8},
                ]}>
                {transactionHistory.username}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Avatar.Image
              source={theme.calendar}
              style={{backgroundColor: theme.back}}
              size={16}
            />
            <Text
              style={[globalStyle.r12, {color: theme.disable, marginLeft: 8}]}>
              {format(transactionHistory.date, 'dd MMM yyyy')}
            </Text>
          </View>
        </View>
      </View>
      {transactionHistory.status == 3 && (
        <TouchableOpacity
          style={style.studentBillItemVerificationContainer}
          onPress={() =>
            navigation.navigate(Routes.ViewTransaction, {
              transaction: transactionHistory,
            })
          }>
          <View>
            <Text style={[globalStyle.r12, {color: theme.txt}]}>
              Menunggu Verifikasi
            </Text>
          </View>
          <View>
            <Text style={[globalStyle.r12, {color: theme.txt}]}>
              {'Selengkapnya >>'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {transactionHistory.status == 4 && (
        <TouchableOpacity
          style={style.studentBillItemInvalidContainer}
          onPress={() =>
            navigation.navigate(Routes.ViewTransaction, {
              transaction: transactionHistory,
            })
          }>
          <View>
            <Text style={[globalStyle.r12, {color: theme.txt}]}>
              Tidak Valid
            </Text>
          </View>
          <View>
            <Text style={[globalStyle.r12, {color: theme.txt}]}>
              {'Selengkapnya >>'}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TransactionHistoryItem;
