/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Avatar, Card, Text as PaperText} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';

import globalStyle from '../../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {AppBar} from '@react-native-material/core';
import {Routes} from '../../../../navigation/Routes';

import PaymentMethodItem from './PaymentMethodItem';

import {useSelector, useDispatch} from 'react-redux';
import {selectPaymentMethod} from '../../../../data/redux/reducers/CreatePayment';
import {getPaymentMethods} from '../../../../data/api/paymentsReq';
import {paymentInstructionsContent} from './paymentInstructions';
import {getPermissions} from '../../../../utils/acl';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const PaymentMethod = () => {
  const {theme} = useSelector(state => state.theme);
  const {selectedStudentId} = useSelector(state => state.student);
  const [permissions, setPermissions] = useState([]);
  const {paymentMethod: currentPaymentMethod} = useSelector(
    state => state.createPayment,
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethodType, setSelectedPaymentMethodType] = useState(
    currentPaymentMethod && currentPaymentMethod.id,
  );
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] = useState(
    currentPaymentMethod && currentPaymentMethod.details.id,
  );

  const [loading, setLoading] = useState(true);

  const handleSelectPaymentMethod = (paymentMethodType, paymentMethodId) => {
    setSelectedPaymentMethodType(paymentMethodType);
    setSelectedPaymentMethodId(paymentMethodId);
  };

  const handleConfirm = () => {
    if (!selectedPaymentMethodType) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        textBody: `Anda belum memilih metode pembayaran!`,
        button: 'OK',
      });

      return true;
    }
    const usePaymentMethod = paymentMethods.find(
      e => e.id === selectedPaymentMethodType,
    );

    if (selectedPaymentMethodType === 1) {
      if (!permissions.find(e => e.feature_id === 31)) {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          textBody: `Akun ini belum tersedia untuk pembayaran dengan Transfer Bank - Manual.`,
          button: 'OK',
        });

        return true;
      }

      const detailPaymentMethod = usePaymentMethod.details.find(
        e => e.id === selectedPaymentMethodId,
      );

      const paymentMethodPayload = {
        id: usePaymentMethod.id,
        name: usePaymentMethod.name,
        value: usePaymentMethod.value,
        details: detailPaymentMethod,
      };

      dispatch(selectPaymentMethod(paymentMethodPayload));
      navigation.navigate(Routes.MyParentTabs, {screen: 'Pembayaran'});
    } else {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        textBody: `Akun ini belum tersedia untuk pembayaran ${usePaymentMethod.name}.`,
        button: 'OK',
      });
    }
  };

  useEffect(() => {
    const acl = getPermissions(selectedStudentId);
    setPermissions(acl);
  }, [selectedStudentId]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await getPaymentMethods();
      if (response.success) {
        console.log('>> paymentMethods: ', response.paymentMethods);
        setPaymentMethods(response.paymentMethods);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
        <View
          style={[globalStyle.main, {backgroundColor: theme.b, marginTop: 15}]}>
          <AppBar
            style={{backgroundColor: theme.b}}
            elevation={0}
            centerTitle={true}
            title="Metode Pembayaran"
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
          {loading && <LoadingStack />}

          {!loading && (
            <View>
              <Card
                style={{
                  backgroundColor: theme.back,
                  marginTop: 20,
                }}>
                <Card.Title
                  title={
                    <PaperText variant="titleSmall" style={{color: theme.txt}}>
                      Transfer Bank - Manual
                    </PaperText>
                  }
                />
                <Card.Content>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={
                      paymentMethods.find(e => e.id === 1) &&
                      paymentMethods.find(e => e.id === 1).details
                    }
                    renderItem={({item: paymentMethod, index}) => {
                      return (
                        <View key={paymentMethod.id}>
                          <PaymentMethodItem
                            paymentmethodType={1}
                            selectedPaymentMethodType={
                              selectedPaymentMethodType
                            }
                            paymentMethod={paymentMethod}
                            selectedPaymentMethodId={selectedPaymentMethodId}
                            onPress={handleSelectPaymentMethod}
                          />
                        </View>
                      );
                    }}
                  />
                </Card.Content>
              </Card>

              <Card
                style={{
                  backgroundColor: theme.back,
                  marginTop: 20,
                }}>
                <Card.Title
                  title={
                    <PaperText variant="titleSmall" style={{color: theme.txt}}>
                      Transfer Bank - Virtual Account
                    </PaperText>
                  }
                />
                <Card.Content>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={
                      paymentMethods.find(e => e.id === 2) &&
                      paymentMethods.find(e => e.id === 2).details
                    }
                    renderItem={({item: paymentMethod, index}) => {
                      return (
                        <View key={paymentMethod.id}>
                          <PaymentMethodItem
                            paymentmethodType={2}
                            selectedPaymentMethodType={
                              selectedPaymentMethodType
                            }
                            paymentMethod={paymentMethod}
                            selectedPaymentMethodId={selectedPaymentMethodId}
                            onPress={handleSelectPaymentMethod}
                          />
                        </View>
                      );
                    }}
                  />
                </Card.Content>
              </Card>

              <Card
                style={{
                  backgroundColor: theme.back,
                  marginTop: 20,
                }}>
                <Card.Title
                  title={
                    <PaperText variant="titleSmall" style={{color: theme.txt}}>
                      Dompet Digital
                    </PaperText>
                  }
                />
                <Card.Content>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={
                      paymentMethods.find(e => e.id === 3) &&
                      paymentMethods.find(e => e.id === 3).details
                    }
                    renderItem={({item: paymentMethod, index}) => {
                      return (
                        <View key={paymentMethod.id}>
                          <PaymentMethodItem
                            paymentmethodType={3}
                            selectedPaymentMethodType={
                              selectedPaymentMethodType
                            }
                            paymentMethod={paymentMethod}
                            selectedPaymentMethodId={selectedPaymentMethodId}
                            onPress={handleSelectPaymentMethod}
                          />
                        </View>
                      );
                    }}
                  />
                </Card.Content>
              </Card>

              <Card
                style={{
                  backgroundColor: theme.back,
                  marginTop: 20,
                }}>
                <Card.Title
                  title={
                    <PaperText variant="titleSmall" style={{color: theme.txt}}>
                      Lainnya
                    </PaperText>
                  }
                />
                <Card.Content>
                  <FlatList
                    onEndReachedThreshold={0.5}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={
                      paymentMethods.find(e => e.id === 4) &&
                      paymentMethods.find(e => e.id === 4).details
                    }
                    renderItem={({item: paymentMethod, index}) => {
                      return (
                        <View key={paymentMethod.id}>
                          <PaymentMethodItem
                            paymentmethodType={4}
                            selectedPaymentMethodType={
                              selectedPaymentMethodType
                            }
                            paymentMethod={paymentMethod}
                            selectedPaymentMethodId={selectedPaymentMethodId}
                            onPress={handleSelectPaymentMethod}
                          />
                        </View>
                      );
                    }}
                  />
                </Card.Content>
              </Card>
              <TouchableOpacity
                onPress={() => this.RBSheetPaymentInstructions.open()}>
                <RBSheet
                  ref={ref => {
                    this.RBSheetPaymentInstructions = ref;
                  }}
                  height={450}
                  openDuration={100}
                  customStyles={{
                    container: {
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                      backgroundColor: theme.b,
                    },
                  }}>
                  <View style={[{backgroundColor: theme.b}]}>
                    <AppBar
                      style={[{backgroundColor: theme.b}]}
                      elevation={0}
                      centerTitle={true}
                      title="Petunjuk Pembayaran"
                      titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
                      leading={
                        <TouchableOpacity
                          onPress={() =>
                            this.RBSheetPaymentInstructions.close()
                          }>
                          <Avatar.Icon
                            icon="chevron-left"
                            style={{backgroundColor: theme.icon}}
                            color={theme.txt}
                            size={45}
                          />
                        </TouchableOpacity>
                      }
                      trailing={
                        <TouchableOpacity
                          onPress={() =>
                            this.RBSheetPaymentInstructions.close()
                          }>
                          <Avatar.Icon
                            icon="close-circle-outline"
                            style={{backgroundColor: theme.btnbg}}
                            color={theme.txt}
                            size={30}
                          />
                        </TouchableOpacity>
                      }
                    />
                    <View style={{margin: 20}}>
                      <PaperText
                        variant="titleMedium"
                        style={{marginBottom: 10, color: theme.txt}}>
                        {selectedPaymentMethodType
                          ? paymentInstructionsContent.find(
                              e => e.id === selectedPaymentMethodType,
                            ).paymentMethod
                          : ''}
                      </PaperText>
                      <FlatList
                        onEndReachedThreshold={0.5}
                        showsVerticalScrollIndicator={false}
                        data={
                          selectedPaymentMethodType
                            ? paymentInstructionsContent.find(
                                e => e.id === selectedPaymentMethodType,
                              ).instructions
                            : []
                        }
                        renderItem={({item, index}) => {
                          return (
                            <View
                              key={item.id}
                              style={{
                                flexDirection: 'row',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                marginVertical: 3,
                              }}>
                              <View style={{width: 25}}>
                                <Text
                                  style={[globalStyle.b16, {color: theme.txt}]}>
                                  {item.no}.
                                </Text>
                              </View>
                              <View style={{flex: 1}}>
                                <Text
                                  style={[globalStyle.b16, {color: theme.txt}]}>
                                  {item.instruction}
                                </Text>
                              </View>
                            </View>
                          );
                        }}
                      />
                    </View>
                  </View>
                </RBSheet>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    width: width - 40,
                    marginTop: 20,
                  }}>
                  <Avatar.Image
                    source={require('../../../../../assets/images/studentbills/pay2.png')}
                    style={{backgroundColor: theme.back}}
                    size={18}
                  />
                  <Text
                    style={[
                      globalStyle.m14,
                      {marginLeft: 8, color: theme.txt},
                    ]}>
                    Petujunk Pembayaran
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        {!loading && (
          <View style={{marginVertical: 20}}>
            <TouchableOpacity
              style={[globalStyle.btn, {width: width - 40}]}
              onPress={handleConfirm}>
              <Text style={[globalStyle.btntxt, {}]}>Konfirmasi</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default PaymentMethod;
