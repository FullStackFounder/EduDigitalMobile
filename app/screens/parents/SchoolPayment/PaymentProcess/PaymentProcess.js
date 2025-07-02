import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';

import globalStyle from '../../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {realmDB} from '../../../../data/db';
import {createPaymentByUpload} from '../../../../data/api/paymentsReq';
import {resetCreatePayment} from '../../../../data/redux/reducers/CreatePayment';

import {
  requestGalleryWithPermission,
  pickImageFromGallery,
} from '../../../../helper/pickerHelper';
import {rupiah} from '../../../../utils/common';
import {Routes} from '../../../../navigation/Routes';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const PaymentProcess = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  const {selectedStudentId} = useSelector(state => state.student);
  const {data, total, paymentMethod} = useSelector(
    state => state.createPayment,
  );
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [student, setStudent] = useState({});
  const [studentClass, setStudentClass] = useState(null);

  const [paymentProof, setPaymentProof] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePickImage = async () => {
    const image = await pickImageFromGallery(student.school_id, 'payment');
    setPaymentProof(JSON.parse(JSON.stringify(image)));
  };

  const handleSubmit = async () => {
    if (!paymentProof) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        textBody: 'Mohon unggah bukti pembayaran.',
        button: 'OK',
      });

      return true;
    }

    setLoading(true);

    const transaction = {
      student_id: selectedStudentId,
      cur_class_id: studentClass,
      total_amount: total,
      total_amount_cash: 0,
      paid_amount: total,
      status: 3,
      created_by: user.id,
    };

    const transactionDetail = [];

    data.forEach(e => {
      transactionDetail.push({
        class_id: e.class_id,
        school_bill_id: e.school_bill_id,
        payment_method_id: paymentMethod.id,
        paid: e.paid,
        discount: 0,
        annotation: e.annotation,
      });
    });

    const transactionPayment = {
      type: paymentMethod.value,
      bank_account_id: paymentMethod.details.id,
      detail: '',
      file: paymentProof.name,
    };

    const result = await createPaymentByUpload(
      transaction,
      transactionDetail,
      transactionPayment,
      student.school_id,
      paymentProof,
    );

    setLoading(false);
    if (result.success) {
      dispatch(resetCreatePayment());
      navigation.navigate(Routes.PaymentSuccess);
    } else {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        textBody:
          'Data pembayaran gagal terkirim. Periksa koneksi internet Anda atau silakan login kembali.',
        button: 'OK',
      });
    }
  };

  useEffect(() => {
    const selectedStudent = realmDB.students
      .getAllStudents()
      .find(e => e.student_id === selectedStudentId);

    const getStudentClass = realmDB.students
      .getAllStudentClasses()
      .find(e => e.student_id === selectedStudentId && e.is_active);

    setStudent(selectedStudent);
    if (getStudentClass) {
      setStudentClass(getStudentClass.class_id);
    } else {
      const filterStudentClass = realmDB.students
        .getAllStudentClasses()
        .filter(e => e.student_id === selectedStudentId);
      setStudentClass(filterStudentClass[0].class_id);
    }
  }, [selectedStudentId]);

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.bg}]}>
        <AppBar
          color={theme.bg}
          title="Pembayaran"
          titleStyle={[globalStyle.m18, {color: theme.txt}]}
          centerTitle={true}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Avatar.Icon
                icon="close"
                size={45}
                color={theme.txt}
                style={{backgroundColor: theme.icon}}
              />
            </TouchableOpacity>
          }
        />
        <ImageBackground
          source={theme.bgimage2}
          resizeMode="cover"
          style={{flex: 1, justifyContent: 'center'}}>
          {loading && <LoadingStack />}
          <View style={[globalStyle.main, {paddingTop: 10}]}>
            <View style={{marginTop: 50}}>
              <Image
                source={theme.bankTransfer2}
                style={{
                  height: height / 5,
                  width: width / 2,
                  alignSelf: 'center',
                }}
                resizeMode="stretch"
              />
              <View
                style={{
                  alignSelf: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: 40,
                }}>
                <Text style={[globalStyle.b12, {color: theme.disable}]}>
                  Pembayaran Tagihan Sekolah
                </Text>
                <Text style={[globalStyle.b14, {marginVertical: 5}]}>
                  {student?.school_name}
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: theme.b1,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                marginTop: 20,
              }}>
              <Avatar.Image
                source={theme.money}
                style={{backgroundColor: theme.back}}
                size={20}
              />
              <Text
                style={[
                  globalStyle.b14,
                  {color: theme.txt, flex: 1, marginLeft: 10},
                ]}>
                Total Tagihan
              </Text>
              <Text style={[globalStyle.r14, {color: theme.txt}]}>
                {rupiah(total)}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: theme.b1,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 8,
              }}>
              <Avatar.Image
                source={theme.bankAccount}
                style={{backgroundColor: theme.back}}
                size={20}
              />
              <Text
                style={[
                  globalStyle.b14,
                  {color: theme.txt, flex: 1, marginLeft: 10},
                ]}>
                Transfer ke
              </Text>
              <Text style={[globalStyle.r14, {color: theme.txt}]}>
                {paymentMethod && paymentMethod.details.account_no}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: theme.b1,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 8,
              }}>
              <Text
                style={[
                  globalStyle.b14,
                  {color: theme.txt, flex: 1, textAlign: 'right'},
                ]}>
                a.n. {paymentMethod && paymentMethod.details.account_name}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: theme.b1,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                marginTop: 8,
              }}>
              <Text style={[globalStyle.b14, {color: theme.txt, flex: 1}]}>
                Unggah Bukti Bayar
              </Text>
              <TouchableOpacity
                onPress={() => {
                  handlePickImage();
                }}>
                <Avatar.Image
                  source={theme.upload}
                  style={{backgroundColor: theme.back}}
                  size={20}
                />
              </TouchableOpacity>
            </View>

            {paymentProof && (
              <View
                style={{
                  backgroundColor: theme.b1,
                  padding: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRadius: 10,
                  marginTop: 8,
                }}>
                <Text
                  style={[
                    globalStyle.b14,
                    {color: theme.txt, flex: 1, textAlign: 'right'},
                  ]}>
                  {paymentProof.name}
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 0,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={[globalStyle.btn, {width: width - 40}]}
              onPress={handleSubmit}>
              <Text style={[globalStyle.btntxt, {}]}>
                Simpan dan Kirim Bukti Pembayaran
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default PaymentProcess;
