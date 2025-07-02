/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import {Avatar, Card, Text, Divider, DataTable} from 'react-native-paper';
import ViewShot, {captureRef} from 'react-native-view-shot';
import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';
import {AppBar} from '@react-native-material/core';
// import {mediaLibrary} from 'react-native-media-library';
// import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';

import {rupiah} from '../../../../utils/common';
import {format} from 'date-fns';
import {useSelector} from 'react-redux';

import {realmDB} from '../../../../data/db';
import {getInvoice} from '../../../../data/api/studentBillsReq';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

async function hasAndroidPermission() {
  const getCheckPermissionPromise = () => {
    if (Platform.Version >= 33) {
      return Promise.all([
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        ),
        PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ),
      ]).then(
        ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
          hasReadMediaImagesPermission && hasReadMediaVideoPermission,
      );
    } else {
      return PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    }
  };

  const hasPermission = await getCheckPermissionPromise();
  if (hasPermission) {
    return true;
  }
  const getRequestPermissionPromise = () => {
    if (Platform.Version >= 33) {
      return PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
      ]).then(
        statuses =>
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
            PermissionsAndroid.RESULTS.GRANTED,
      );
    } else {
      return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ).then(status => status === PermissionsAndroid.RESULTS.GRANTED);
    }
  };

  return await getRequestPermissionPromise();
}

const Invoice = ({route, navigation}) => {
  const {transaction} = route.params;
  const {theme} = useSelector(state => state.theme);
  const {selectedStudentId} = useSelector(state => state.student);
  const [student, setStudent] = useState({});
  const [invoice, setInvoice] = useState([]);
  const [loading, setLoading] = useState(false);

  const viewShot = useRef(null);
  const [uri, setUri] = useState('');
  const captureScreen = () => {
    viewShot.current.capture().then(uri => {
      setUri(uri);
    });
  };

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

      if (!result.success) {
        console.log('>> handleGetInvoice', result);
      } else {
        setInvoice(result.success && result.invoice);
      }

      setLoading(false);
    };

    handleGetInvoice();
  }, [transaction.id]);

  const saveAsImage = async () => {
    try {
      const result = await captureRef(viewShot, {
        result: 'tmpfile',
        quality: 1,
        format: 'png',
      });
      // mediaLibrary.saveToLibrary(result);
      if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
        return;
      }

      // CameraRoll.saveAsset(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View
        style={[
          globalStyle.main,
          {backgroundColor: theme.background, marginTop: 15},
        ]}>
        <AppBar
          style={{backgroundColor: theme.b}}
          elevation={0}
          // leading={
          //   <Image
          //     source={theme.invoice}
          //     resizeMode="stretch"
          //     style={{
          //       height: height / 30,
          //       width: width / 13,
          //       alignSelf: 'center',
          //     }}
          //   />
          // }
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
        <ViewShot ref={viewShot}>
          {loading && <LoadingStack />}

          {!loading && (
            <View style={style.marginVertical}>
              <Card.Title
                title={
                  <Text
                    variant="titleLarge"
                    style={([style.title], {color: theme.txt})}>
                    Kwitansi Pembayaran
                  </Text>
                }
                subtitle={
                  <Text
                    variant="bodyMedium"
                    style={[style.subtitle, {color: theme.txt}]}>
                    {student.school_name}
                  </Text>
                }
                left={props => (
                  <Avatar.Image
                    source={{
                      uri: `https://appso.id/schools/${student.school_id}/logo/${student.school_logo}`,
                    }}
                    style={{backgroundColor: theme.back}}
                    size={48}
                  />
                )}
              />

              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  margin: 4,
                }}>
                <Text
                  variant="bodySmall"
                  style={[style.subtitle, {color: theme.txt}]}>
                  No. Transaksi:
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <Text
                      variant="bodyMedium"
                      style={[style.subtitle, {color: theme.txt}]}>
                      {transaction.transaction_no.substr(
                        transaction.transaction_no.length - 11,
                      )}
                    </Text>
                  </View>

                  <Text
                    variant="bodyMedium"
                    style={{marginRight: 4, color: theme.txt}}>
                    {format(transaction.date, 'dd MMM yyyy')}
                  </Text>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
                <View
                  style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <Text
                    variant="bodySmall"
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

              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>
                    <Text style={{color: theme.txt}}>Pembayaran</Text>
                  </DataTable.Title>
                  <DataTable.Title numeric>
                    <Text style={{color: theme.txt}}>Dibayar</Text>
                  </DataTable.Title>
                </DataTable.Header>
                {invoice.map(item => (
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
              </DataTable>
              <Divider />
              <Card.Actions>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}></View>

                  <View
                    style={{flexDirection: 'column', justifyContent: 'center'}}>
                    {transaction.role_id !== 13 && (
                      <Image
                        source={theme.lunas}
                        resizeMode="stretch"
                        style={{
                          height: height / 10,
                          width: width / 5,
                          alignSelf: 'center',
                          marginVertical: 10,
                        }}
                      />
                    )}
                    <Text
                      variant="bodyMedium"
                      style={[style.subtitle, {color: theme.txt}]}>
                      {transaction.username}
                    </Text>
                    <Text
                      variant="bodyMedium"
                      style={{textAlign: 'center', color: theme.txt}}>
                      {transaction.role_id === 13 ? 'Dibayar oleh' : 'Petugas'}
                    </Text>
                  </View>
                </View>
              </Card.Actions>
            </View>
          )}
        </ViewShot>
      </View>
      {/* <View style={{marginTop: 50, marginBottom: 20}}>
        <TouchableOpacity
          onPress={saveAsImage}
          style={[globalStyle.btn, {width: width - 40}]}>
          <Text style={[globalStyle.btntxt, {}]}>Download</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default Invoice;
