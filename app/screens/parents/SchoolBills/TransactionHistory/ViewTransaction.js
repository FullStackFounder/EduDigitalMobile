/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Modal,
} from 'react-native';
import {Avatar, Text, DataTable, Chip, Button} from 'react-native-paper';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';
import {AppBar} from '@react-native-material/core';
import ImageViewer from 'react-native-image-zoom-viewer';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';

import {rupiah} from '../../../../utils/common';
import {format} from 'date-fns';
import {useSelector} from 'react-redux';
import {Routes} from '../../../../navigation/Routes';

import {pickImageFromGallery} from '../../../../helper/pickerHelper';

import {realmDB} from '../../../../data/db';
import {getInvoice} from '../../../../data/api/studentBillsReq';
import {
  deletePayment,
  reUploadPaymentProof,
  getPaymentProof,
} from '../../../../data/api/paymentsReq';
import {BASE_URL} from '../../../../data/api/utils';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ViewTransaction = ({route, navigation}) => {
  const {transaction} = route.params;
  const {theme} = useSelector(state => state.theme);
  const {selectedStudentId} = useSelector(state => state.student);
  const [student, setStudent] = useState({});
  const [invoice, setInvoice] = useState([]);
  const [paymentProof, setPaymentProof] = useState(null);
  const [images, setImages] = useState([]);
  const [modal, showModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = realmDB.students
      .getAllStudents()
      .filter(e => e.student_id === selectedStudentId);

    setStudent(data[0]);
  }, [selectedStudentId]);

  useEffect(() => {
    const handleGetInvoice = async () => {
      setLoading(true);
      const result = await getInvoice(transaction.id);
      console.log('>> handleGetInvoice id: ', transaction.id);
      console.log('>> handleGetInvoice: ', result);
      if (!result.success) {
        console.log('>> handleGetInvoice', result);
      } else {
        setInvoice(result.success && result.invoice);
      }

      setLoading(false);
    };

    handleGetInvoice();
  }, [transaction.id]);

  useEffect(() => {
    async function fetchPaymentProof() {
      const result = await getPaymentProof(transaction.id);
      if (!result.success) {
        console.log('>> fetchPaymentProof', result);
      } else {
        console.log('>> fetchPaymentProof', result);
        const imageData = [
          {
            // Simplest usage.
            url:
              BASE_URL +
              `/schools/${student.school_id}/images/transfer/${result.payment.file}`,

            // width: number
            // height: number
            // Optional, if you know the image size, you can set the optimization performance

            // You can pass props to <Image />.
            props: {
              // headers: ...
            },
          },
        ];
        setImages(result.success && imageData);
      }
    }

    fetchPaymentProof();
  }, [student.school_id, transaction.id]);

  const handlePickImage = async () => {
    const image = await pickImageFromGallery(student.school_id, 'payment');
    console.log('>> image: ', JSON.stringify(image));
    setPaymentProof(JSON.parse(JSON.stringify(image)));
  };

  const handleDeleteTransaction = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah anda yakin akan menghapus transaksi ini?',
      [
        {text: 'Batal', onPress: () => console.log('Cancel Pressed')},
        {
          text: 'Ya, Hapus',
          onPress: async () => {
            const deleteReq = await deletePayment(transaction.id);
            if (!deleteReq.success) {
              Alert.alert('Gagal', 'Transaksi gagal dihapus.');
            } else {
              Alert.alert('Sukses', 'Transaksi berhasil dihapus.');
              navigation.navigate(Routes.MyParentTabs, {
                screen: 'Tagihan',
                params: {
                  isRefresh: deleteReq.schoolPayment,
                },
              });
            }
          },
        },
      ],
    );
  };

  const handleSave = async () => {
    if (!paymentProof) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        textBody: 'Mohon unggah bukti pembayaran.',
        button: 'OK',
      });

      return true;
    }

    setLoading(true);

    const result = await reUploadPaymentProof(transaction, paymentProof);

    setLoading(false);
    if (result.success) {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        textBody: 'Bukti pembayaran berhasil dikirim ulang.',
        button: 'OK',
        onPressButton: () => {
          navigation.navigate(Routes.MyParentTabs, {
            screen: 'Tagihan',
            params: {
              isRefresh: paymentProof.name,
            },
          });
        },
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        textBody:
          'Data pembayaran gagal terkirim. Periksa koneksi internet Anda atau silakan login kembali.',
        button: 'OK',
      });
    }
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
        <View
          style={[
            globalStyle.main,
            {backgroundColor: theme.background, marginTop: 15},
          ]}>
          <AppBar
            title={`#${transaction.transaction_no.substr(
              transaction.transaction_no.length - 11,
            )}`}
            titleStyle={{color: theme.txt}}
            style={{backgroundColor: theme.b}}
            elevation={0}
            trailing={
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Avatar.Icon
                  icon="close"
                  style={{backgroundColor: theme.icon}}
                  size={30}
                  color={theme.txt}
                />
              </TouchableOpacity>
            }
          />
          {loading && <LoadingStack />}

          {!loading && (
            <View>
              {transaction.status === 3 && (
                <Chip
                  style={{
                    width: 170,
                    backgroundColor: '#FFB200',
                  }}>
                  <Text variant="titleSmall" style={{color: '#FFFFFF'}}>
                    Menunggu Verifikasi
                  </Text>
                </Chip>
              )}

              {transaction.status === 4 && (
                <Chip
                  style={{
                    width: 110,
                    backgroundColor: '#E4003A',
                  }}>
                  <Text variant="titleSmall" style={{color: '#FFFFFF'}}>
                    Tidak Valid
                  </Text>
                </Chip>
              )}

              {transaction.status === 4 && (
                <View style={{backgroundColor: '#FFCCD2', marginTop: 8}}>
                  <View style={{margin: 8}}>
                    <Text variant="bodySmall">
                      Pembayaran anda tidak valid dapat dikarenakan:
                    </Text>
                    <Text variant="bodySmall">
                      1. Total pembayaran dan bukti transfer tidak sesuai.
                    </Text>
                    <Text variant="bodySmall">
                      2. Bukti transfer tidak dapat dibaca.
                    </Text>
                  </View>
                </View>
              )}

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  margin: 4,
                  marginTop: 14,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <View style={{flex: 1}}>
                    <View
                      style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        variant="titleSmall"
                        style={[style.subtitle, {color: theme.txt}]}>
                        Pembayaran atas nama:
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={[style.subtitle, {color: theme.txt}]}>
                        {student.student_name}
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={[style.subtitle, {color: theme.txt}]}>
                        {student.nisn}
                      </Text>
                      <Text
                        variant="bodyMedium"
                        style={[style.subtitle, {color: theme.txt}]}>
                        {transaction.class_name}
                      </Text>
                    </View>
                  </View>

                  <Text
                    variant="titleSmall"
                    style={{marginRight: 4, color: theme.txt}}>
                    {format(transaction.date, 'dd MMM yyyy')}
                  </Text>
                </View>
              </View>

              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Text style={{color: theme.txt}}>Pembayaran</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric>
                    <Text style={{color: theme.txt}}>Dibayar</Text>
                  </DataTable.Title>
                </DataTable.Header>
                {invoice &&
                  invoice.map(item => (
                    <DataTable.Row style={{marginVertical: 0}} key={item.id}>
                      <DataTable.Cell style={{flex: 3}}>
                        <View style={{flexDirection: 'column'}}>
                          <Text variant="bodySmall" style={{color: theme.txt}}>
                            {item.bill_name}
                            {item.annotation ? ` - ${item.annotation}` : ''}
                          </Text>
                          <Text variant="bodySmall" style={{color: theme.txt}}>
                            {'Tagihan: ' + rupiah(item.nominal)}
                          </Text>
                        </View>
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        <Text style={{color: theme.txt}}>
                          {rupiah(item.paid)}
                        </Text>
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
                <DataTable.Row>
                  <DataTable.Cell style={{flex: 3}}>
                    <Text variant="titleSmall" style={{color: theme.txt}}>
                      Total
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    <Text variant="titleSmall" style={{color: theme.txt}}>
                      {rupiah(transaction.total_amount)}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{flex: 3}}>
                    <Text variant="bodyMedium" style={{color: theme.txt}}>
                      Bukti Transfer
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    <TouchableOpacity onPress={() => showModal(true)}>
                      <Avatar.Image
                        source={theme.invoice}
                        style={{backgroundColor: theme.back}}
                        size={20}
                      />
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell style={{flex: 3}}>
                    <Text variant="bodyMedium" style={{color: theme.txt}}>
                      {paymentProof
                        ? paymentProof.name.substr(
                            paymentProof.name.length - 11,
                          )
                        : 'Kirim Ulang Bukti Transfer'}
                    </Text>
                  </DataTable.Cell>
                  <DataTable.Cell numeric>
                    <TouchableOpacity onPress={handlePickImage}>
                      <Avatar.Image
                        source={theme.upload}
                        style={{backgroundColor: theme.back}}
                        size={20}
                      />
                    </TouchableOpacity>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
            marginVertical: 20,
          }}>
          <View style={{flex: 1}}>
            <TouchableOpacity
              onPress={handleDeleteTransaction}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../../../assets/images/s25.png')}
                resizeMode="stretch"
                style={{
                  height: height / 30,
                  width: width / 13,
                  alignSelf: 'center',
                }}
              />
              <Text variant="bodyMedium" style={{color: theme.txt}}>
                Hapus
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Button
              buttonColor={'#3757FF'}
              mode="contained"
              onPress={handleSave}>
              Simpan Perubahan
            </Button>
          </View>
        </View>
        <Modal visible={modal} transparent={false}>
          <ImageViewer imageUrls={images} onClick={() => showModal(false)} />
        </Modal>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default ViewTransaction;
