/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Card, Text as PaperText, DataTable} from 'react-native-paper';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {removePayment} from '../../../data/redux/reducers/CreatePayment';
import {Routes} from '../../../navigation/Routes';

import {rupiah} from '../../../utils/common';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const SchoolPayment = () => {
  const {theme} = useSelector(state => state.theme);
  const {data, total, paymentMethod} = useSelector(
    state => state.createPayment,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [currentPaymentMethod, setPaymentMethod] = useState(null);

  const handleRemovePayment = id => {
    dispatch(removePayment(id));
  };

  const handleProceed = () => {
    if (!currentPaymentMethod) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        textBody: 'Anda belum memilih metode pembayaran.',
        button: 'OK',
      });

      return true;
    }

    navigation.navigate(Routes.PaymentProcess);
  };

  useEffect(() => {
    setPaymentMethod(paymentMethod);
  }, [paymentMethod]);

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
        <View style={[globalStyle.main, {paddingTop: 20}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={theme.c5}
              style={{
                width: width / 12,
                height: height / 30,
                marginHorizontal: 15,
              }}
              resizeMode="stretch"
            />
            <Text style={[globalStyle.subtitle, {color: theme.txt, flex: 1}]}>
              Pembayaran
            </Text>

            {data.length > 0 && (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Routes.MyParentTabs, {screen: 'Tagihan'})
                }
                style={{
                  alignSelf: 'center',
                  backgroundColor: Colors.primary,
                  height: 30,
                  width: 30,
                  borderRadius: 35,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="add-sharp" size={20} color={Colors.secondary} />
              </TouchableOpacity>
            )}
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {data.length === 0 && (
              <View
                style={{
                  backgroundColor: theme.back,
                  padding: 20,
                  borderRadius: 15,
                  marginTop: 15,
                }}>
                <Image
                  source={theme.bill}
                  style={{
                    width: width / 4,
                    height: height / 9,
                    marginHorizontal: 15,
                    alignSelf: 'center',
                    marginTop: 20,
                  }}
                  resizeMode="stretch"
                />
                <Text
                  style={[
                    globalStyle.subtitle,
                    {color: theme.txt, textAlign: 'center', marginTop: 15},
                  ]}>
                  Buat Pembayaran?
                </Text>
                <Text
                  style={[
                    globalStyle.r14,
                    {color: theme.disable, textAlign: 'center', marginTop: 5},
                  ]}>
                  Silakan ke menu tagihan sekolah dan pilih tagihan sekolah yang
                  ingin dibayar.
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(Routes.MyParentTabs, {
                      screen: 'Tagihan',
                    })
                  }
                  style={{
                    alignSelf: 'center',
                    backgroundColor: Colors.primary,
                    height: 60,
                    width: 60,
                    borderRadius: 35,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <Icon name="add-sharp" size={25} color={Colors.secondary} />
                </TouchableOpacity>
              </View>
            )}

            {data.length > 0 && (
              <View>
                <Card
                  mode="contained"
                  style={{
                    backgroundColor: theme.back,
                    marginTop: 25,
                  }}>
                  <DataTable>
                    <DataTable.Header>
                      <DataTable.Title style={{flex: 3}}>
                        <Text style={{color: theme.txt}}>
                          Pembayaran Tagihan Sekolah
                        </Text>
                      </DataTable.Title>
                      <DataTable.Title style={{flex: 2}} numeric>
                        <Text style={{color: theme.txt}}>Dibayar</Text>
                      </DataTable.Title>
                      <DataTable.Title numeric>
                        <Text style={{color: theme.txt}}>#</Text>
                      </DataTable.Title>
                    </DataTable.Header>
                    {data.map((item, index) => (
                      <DataTable.Row style={{marginVertical: 0}} key={index}>
                        <DataTable.Cell style={{flex: 3}}>
                          <View style={{flexDirection: 'column'}}>
                            <Text
                              variant="bodySmall"
                              style={{color: theme.txt}}>
                              {item.bill_name}
                              {item.annotation ? ` - ${item.annotation}` : ''}
                            </Text>
                          </View>
                        </DataTable.Cell>
                        <DataTable.Cell style={{flex: 2}} numeric>
                          <Text style={{color: theme.txt}}>
                            {rupiah(item.paid)}
                          </Text>
                        </DataTable.Cell>
                        <DataTable.Cell numeric>
                          <TouchableOpacity
                            onPress={() => handleRemovePayment(item.id)}>
                            <Image
                              source={theme.delete}
                              style={{
                                width: 20,
                                height: 20,
                              }}
                              resizeMode="stretch"
                            />
                          </TouchableOpacity>
                        </DataTable.Cell>
                      </DataTable.Row>
                    ))}
                    <DataTable.Row style={{marginVertical: 0}}>
                      <DataTable.Cell style={{flex: 3}}>
                        <PaperText
                          variant="titleMedium"
                          style={{color: theme.txt}}>
                          Total Pembayaran
                        </PaperText>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        <PaperText
                          variant="titleMedium"
                          style={{color: theme.txt}}>
                          {rupiah(total)}
                        </PaperText>
                      </DataTable.Cell>
                    </DataTable.Row>
                  </DataTable>
                </Card>

                <Card
                  mode="contained"
                  style={{
                    backgroundColor: theme.back,
                    marginTop: 15,
                  }}>
                  <Card.Content>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <PaperText
                        variant="bodyMedium"
                        style={{color: theme.txt}}>
                        Metode Pembayaran:
                      </PaperText>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(Routes.PaymentMethod)
                        }
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <PaperText
                          variant="bodyMedium"
                          style={{color: theme.txt}}>
                          Pilih
                        </PaperText>
                        <Icons
                          name="chevron-down"
                          size={20}
                          color={theme.txt}
                        />
                      </TouchableOpacity>
                    </View>
                    {paymentMethod && (
                      <PaperText
                        variant="titleMedium"
                        style={{marginVertical: 20, color: theme.txt}}>
                        {paymentMethod.name} - {paymentMethod.details.name}
                      </PaperText>
                    )}
                  </Card.Content>
                </Card>
                <View style={{marginVertical: 20}}>
                  <TouchableOpacity
                    style={[globalStyle.btn, {width: width - 40}]}
                    onPress={handleProceed}>
                    <Text style={[globalStyle.btntxt, {}]}>BAYAR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default SchoolPayment;
