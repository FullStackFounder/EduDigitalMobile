import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Card, Text as PaperText, Divider, Checkbox} from 'react-native-paper';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';

import {Colors} from '../../../../components/theme/color';
import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector, useDispatch} from 'react-redux';
import {addPayment} from '../../../../data/redux/reducers/CreatePayment';

import {rupiah} from '../../../../utils/common';

const Others = ({studentBill}) => {
  const {theme} = useSelector(state => state.theme);
  const {data} = useSelector(state => state.createPayment);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [paid, onChangePaid] = useState(0);
  const [isPaidFull, setIsPaidFull] = useState(false);
  const [error, setError] = useState('');

  const handlePaidFull = () => {
    setIsPaidFull(!isPaidFull);
    if (!isPaidFull) {
      onChangePaid(studentBill.total_amount_unpaid);
    } else {
      onChangePaid(0);
    }
  };

  const handleSavePayment = () => {
    if (!paid) {
      setError('Nominal bayar harus diisi');

      return false;
    }

    if (isNaN(paid)) {
      setError('Nominal bayar tidak valid');
      return false;
    }

    setError('');

    const payment = [
      {
        id: data.length + 1,
        class_id: studentBill.class_id,
        school_bill_id: studentBill.school_bill_id,
        bill_name: studentBill.bill_name,
        paid,
        annotation: '',
      },
    ];

    console.log('>> handleSavePayment', payment);

    dispatch(addPayment(payment));

    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Berhasil',
      textBody:
        'Silakan ke menu pembayaran untuk melakukan pembayaran atau pilih tagihan lain.',
      button: 'Ok',
      onPressButton: () =>
        navigation.navigate(Routes.MyParentTabs, {screen: 'Pembayaran'}),
    });
  };

  return (
    <AlertNotificationRoot>
      <View>
        <Card
          style={[style.cardContainer, {backgroundColor: theme.bg}]}
          mode={'contained'}>
          <Card.Title
            title={
              <Text style={{color: theme.txt}}>studentBill.bill_name</Text>
            }
            subtitle={
              <Text style={{color: theme.txt}}>
                sJenis: {studentBill.bill_type}
              </Text>
            }
          />
          <Divider style={{marginBottom: 20}} />
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <PaperText variant="bodySmall">
                  Sudah Dibayar: {rupiah(studentBill.total_amount_paid)}{' '}
                </PaperText>
              </View>
              <View>
                <PaperText variant="bodySmall">
                  Kekurangan:{' '}
                  {studentBill.nominal_set === 1
                    ? rupiah(studentBill.total_amount_unpaid)
                    : '-'}{' '}
                </PaperText>
              </View>
            </View>
          </Card.Content>
        </Card>

        <View
          style={{
            backgroundColor: theme.bg,
            borderWidth: 1,
            borderColor: theme.border,
            borderRadius: 20,
            marginTop: 20,
            marginBottom: 5,
          }}>
          <View
            style={[
              globalStyle.txtinput,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <View style={{flex: 1}}>
              <Text
                style={[
                  globalStyle.r12,
                  {color: theme.disable, marginTop: 20},
                ]}>
                Nominal Bayar (Rp.)
              </Text>
              <TextInput
                placeholder="0"
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                value={`${rupiah(paid)}`}
                keyboardType="numeric"
                style={[
                  globalStyle.m16,
                  {
                    color: theme.txt,
                    flex: 1,
                    marginRight: 10,
                    marginBottom: 10,
                  },
                ]}
                onChangeText={value => {
                  const numericValue = value.replace(/[^0-9]/g, '');
                  onChangePaid(numericValue);
                }}
              />
            </View>
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Checkbox
                status={isPaidFull ? 'checked' : 'unchecked'}
                onPress={handlePaidFull}
                color="#5AB2FF"
              />
              <PaperText variant="bodySmall" style={{color: theme.txt}}>
                Bayar Penuh
              </PaperText>
            </TouchableOpacity>
          </View>
        </View>

        {error.length > 0 && <Text style={[style.error]}>{error}</Text>}

        <TouchableOpacity
          onPress={handleSavePayment}
          style={[globalStyle.btn, style.buttonContainer]}>
          <Text style={[globalStyle.btntxt, {}]}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </AlertNotificationRoot>
  );
};

export default Others;
