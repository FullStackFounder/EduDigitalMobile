import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Card, Text as PaperText, Divider, Checkbox} from 'react-native-paper';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';

import {Colors} from '../../../../components/theme/color';
import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector, useDispatch} from 'react-redux';
import {addPayment} from '../../../../data/redux/reducers/CreatePayment';

import {rupiah} from '../../../../utils/common';

const InputBulanan = props => {
  const {theme} = useSelector(state => state.theme);
  const juli = props.bulanan.find(e => e.name === 'Juli');
  const agustus = props.bulanan.find(e => e.name === 'Agustus');
  const september = props.bulanan.find(e => e.name === 'September');
  const oktober = props.bulanan.find(e => e.name === 'Oktober');
  const november = props.bulanan.find(e => e.name === 'November');
  const desember = props.bulanan.find(e => e.name === 'Desember');
  const januari = props.bulanan.find(e => e.name === 'Januari');
  const februari = props.bulanan.find(e => e.name === 'Februari');
  const maret = props.bulanan.find(e => e.name === 'Maret');
  const april = props.bulanan.find(e => e.name === 'April');
  const mei = props.bulanan.find(e => e.name === 'Mei');
  const juni = props.bulanan.find(e => e.name === 'Juni');

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={juli && juli.is_disabled}
              status={juli && juli.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Juli')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Juli
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={agustus && agustus.is_disabled}
              status={agustus && agustus.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Agustus')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Agustus
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={september && september.is_disabled}
              status={september && september.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('September')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              September
            </PaperText>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={oktober && oktober.is_disabled}
              status={oktober && oktober.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Oktober')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Oktober
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={november && november.is_disabled}
              status={november && november.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('November')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              November
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={desember && desember.is_disabled}
              status={desember && desember.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Desember')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Desember
            </PaperText>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={januari && januari.is_disabled}
              status={januari && januari.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Januari')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Januari
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={februari && februari.is_disabled}
              status={februari && februari.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Februari')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Februari
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={maret && maret.is_disabled}
              status={maret && maret.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Maret')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Maret
            </PaperText>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
        }}>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={april && april.is_disabled}
              status={april && april.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('April')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              April
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={mei && mei.is_disabled}
              status={mei && mei.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              onPress={e => props.handleSetBulanan('Mei')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Mei
            </PaperText>
          </TouchableOpacity>
        </View>
        <View style={{width: '33%'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              disabled={juni && juni.is_disabled}
              status={juni && juni.checked ? 'checked' : 'unchecked'}
              color="#5AB2FF"
              value={'Juni'}
              onPress={e => props.handleSetBulanan('Juni')}
            />
            <PaperText variant="bodySmall" style={{color: theme.txt}}>
              Juni
            </PaperText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const InputSemester = props => {
  const {theme} = useSelector(state => state.theme);
  const gasal = props.semester.find(e => e.name === 'Gasal');
  const genap = props.semester.find(e => e.name === 'Genap');
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            disabled={gasal && gasal.is_disabled}
            status={gasal && gasal.checked ? 'checked' : 'unchecked'}
            onPress={
              gasal && !gasal.is_disabled && props.handleSetSemesterGasal
            }
            color="#5AB2FF"
          />
          <PaperText variant="bodySmall" style={{color: theme.txt}}>
            Gasal
          </PaperText>
        </TouchableOpacity>
      </View>
      <View style={{marginLeft: 20}}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Checkbox
            disabled={genap && genap.is_disabled}
            status={genap && genap.checked ? 'checked' : 'unchecked'}
            onPress={
              genap && !genap.is_disabled && props.handleSetSemesterGenap
            }
            color="#5AB2FF"
          />
          <PaperText variant="bodySmall" style={{color: theme.txt}}>
            Genap
          </PaperText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const BulananSemester = ({studentBill, studentBillDetails}) => {
  console.log('>> BulananSemester studentBill: ', studentBill);
  const {theme} = useSelector(state => state.theme);
  const {data} = useSelector(state => state.createPayment);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [bulanan, setBulanan] = useState([]);
  const [semester, setSemester] = useState([]);
  const [paid, onChangePaid] = useState(0);
  const [alreadyPaid, onChangeAlreadyPaid] = useState('-');
  const [debt, onChangeDebt] = useState('-');
  const [isPaidFull, setIsPaidFull] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const currentData = [];
    studentBillDetails.forEach(e => {
      let billExist = false;
      const findBill = data.find(
        bill =>
          bill.school_bill_id === studentBill.school_bill_id &&
          bill.annotation === e.name,
      );

      if (findBill) {
        billExist = true;
      }

      const newData = {
        id: e.id,
        name: e.name,
        amount_paid: e.amount_paid,
        checked: billExist || e.amount_paid >= studentBill.nominal,
        is_disabled: e.amount_paid >= studentBill.nominal || billExist,
      };
      currentData.push(newData);
    });
    if (studentBill.bill_type === 'Bulanan') {
      setBulanan(currentData);
    } else if (studentBill.bill_type === 'Semester') {
      setSemester(currentData);
    }
  }, [
    data,
    studentBill.bill_type,
    studentBill.nominal,
    studentBill.school_bill_id,
    studentBillDetails,
  ]);

  const handleSetBulanan = value => {
    const newData = [];
    bulanan.forEach(e => {
      newData.push({
        id: e.id,
        name: e.name,
        amount_paid: e.amount_paid,
        checked:
          e.name === value && !e.checked
            ? true
            : e.name === value && e.checked
            ? false
            : e.checked,
        is_disabled: e.is_disabled,
      });
    });

    setBulanan(newData);

    const bulan = studentBillDetails.find(e => e.name === value);
    const parseDebt = Number(studentBill.nominal) - Number(bulan.amount_paid);
    onChangeAlreadyPaid(bulan.amount_paid);
    onChangeDebt(parseDebt);

    if (newData.filter(e => e.checked && !e.is_disabled).length > 1) {
      const valueArr = [];
      newData.forEach(e => {
        if (e.checked && !e.is_disabled) {
          valueArr.push(e.amount_paid);
        }
      });

      const isSameAmount = valueArr
        .map(item => item)
        .filter((e, index, self) => self.indexOf(e) === index);

      if (isSameAmount.length > 1) {
        setError(
          'Ada perbedaan pada nominal yang sudah dibayarkan. Anda hanya boleh memilih bulan dengan jumlah kekurangan yang sama.',
        );
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleSetSemesterGasal = () => {
    const newData = [];
    semester.forEach(e => {
      newData.push({
        id: e.id,
        name: e.name,
        amount_paid: e.amount_paid,
        checked:
          e.name === 'Gasal' && e.checked
            ? false
            : e.name === 'Gasal' && !e.checked
            ? true
            : e.checked,
        is_disabled: e.is_disabled,
      });
    });

    setSemester(newData);

    const gasal = studentBillDetails.find(e => e.name === 'Gasal');
    const parseDebt = Number(studentBill.nominal) - Number(gasal.amount_paid);
    onChangeAlreadyPaid(gasal.amount_paid);
    onChangeDebt(parseDebt);

    if (newData.filter(e => e.checked && !e.is_disabled).length > 1) {
      const valueArr = [];
      newData.forEach(e => {
        if (e.checked && !e.is_disabled) {
          valueArr.push(e.amount_paid);
        }
      });

      const isSameAmount = valueArr
        .map(item => item)
        .filter((e, index, self) => self.indexOf(e) === index);

      if (isSameAmount.length > 1) {
        setError(
          'Ada perbedaan pada nominal yang sudah dibayarkan. Anda hanya boleh memilih 1 semester.',
        );
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handleSetSemesterGenap = () => {
    const newData = [];
    semester.forEach(e => {
      newData.push({
        id: e.id,
        name: e.name,
        amount_paid: e.amount_paid,
        checked:
          e.name === 'Genap' && e.checked
            ? false
            : e.name === 'Genap' && !e.checked
            ? true
            : e.checked,
        is_disabled: e.is_disabled,
      });
    });

    setSemester(newData);

    const genap = studentBillDetails.find(e => e.name === 'Genap');
    const parseDebt = Number(studentBill.nominal) - Number(genap.amount_paid);
    onChangeAlreadyPaid(genap.amount_paid);
    onChangeDebt(parseDebt);

    if (newData.filter(e => e.checked && !e.is_disabled).length > 1) {
      const valueArr = [];
      newData.forEach(e => {
        if (e.checked && !e.is_disabled) {
          valueArr.push(e.amount_paid);
        }
      });

      const isSameAmount = valueArr
        .map(item => item)
        .filter((e, index, self) => self.indexOf(e) === index);

      if (isSameAmount.length > 1) {
        setError(
          'Ada perbedaan pada nominal yang sudah dibayarkan. Anda hanya boleh memilih 1 semester.',
        );
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  const handlePaidFull = () => {
    setIsPaidFull(!isPaidFull);
    if (!isPaidFull) {
      if (studentBill.bill_type === 'Semester') {
        if (semester.filter(e => e.checked && !e.is_disabled).length === 0) {
          setError('Semester belum dipilih.');
          return false;
        }

        if (semester.filter(e => e.checked && !e.is_disabled).length > 0) {
          setError('');
        }

        onChangePaid(studentBill.nominal);
      } else if (studentBill.bill_type === 'Bulanan') {
        if (bulanan.filter(e => e.checked && !e.is_disabled).length === 0) {
          setError('Bulan belum dipilih.');
          return false;
        }

        if (bulanan.filter(e => e.checked && !e.is_disabled).length === 1) {
          setError('');
          const currentBulan = bulanan.find(e => e.checked && !e.is_disabled);
          const bulan = studentBillDetails.find(
            e => e.name === currentBulan.name,
          );
          const parseDebt =
            Number(studentBill.nominal) - Number(bulan.amount_paid);

          onChangePaid(parseDebt);
        } else {
          setError('');

          onChangePaid(studentBill.nominal);
        }
      }
    } else {
      onChangePaid(0);
    }
  };

  const handleSavePayment = () => {
    const isInputBulananValid = bulanan.find(
      e => e.is_disabled === false && e.checked === true,
    );

    const isInputSemesterValid = semester.find(
      e => e.is_disabled === false && e.checked === true,
    );

    if (studentBill.bill_type === 'Bulanan' && !isInputBulananValid) {
      setError('Belum ada bulan yang dipilih');

      return false;
    }

    if (studentBill.bill_type === 'Semester' && !isInputSemesterValid) {
      setError('Belum ada semester yang dipilih');

      return false;
    }

    if (!paid) {
      setError('Nominal bayar harus diisi');

      return false;
    }

    if (isNaN(paid)) {
      setError('Nominal bayar tidak valid');
      return false;
    }

    setError('');
    const payment = [];
    let newId = data.length + 1;
    if (studentBill.bill_type === 'Semester') {
      semester.forEach(e => {
        if (!e.is_disabled && e.checked) {
          payment.push({
            id: newId++,
            class_id: studentBill.class_id,
            school_bill_id: studentBill.school_bill_id,
            bill_name: studentBill.bill_name,
            paid: Number(paid),
            annotation: e.name,
          });
        }
      });
    } else if (studentBill.bill_type === 'Bulanan') {
      bulanan.forEach(e => {
        if (!e.is_disabled && e.checked) {
          payment.push({
            id: newId++,
            class_id: studentBill.class_id,
            school_bill_id: studentBill.school_bill_id,
            bill_name: studentBill.bill_name,
            paid: Number(paid),
            annotation: e.name,
          });
        }
      });
    }

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
              <Text style={{color: theme.txt}}>{studentBill.bill_name}</Text>
            }
            subtitle={
              <Text style={{color: theme.txt}}>
                Jenis: {studentBill.bill_type}
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
                <PaperText variant="bodySmall" style={{color: theme.txt}}>
                  Sudah Dibayar:{' '}
                  {alreadyPaid !== '-' ? rupiah(alreadyPaid) : alreadyPaid}{' '}
                </PaperText>
              </View>
              <View>
                <PaperText variant="bodySmall" style={{color: theme.txt}}>
                  Kekurangan:{' '}
                  {Number(studentBill.nominal_set) === 1 && debt !== '-'
                    ? rupiah(debt)
                    : debt}{' '}
                </PaperText>
              </View>
            </View>
          </Card.Content>
          <Divider style={{marginVertical: 20}} />
          {studentBill.bill_type === 'Bulanan' && (
            <Card.Content>
              <PaperText
                variant="bodySmall"
                style={{marginBottom: 5, color: theme.txt}}>
                Pilih Bulan:
              </PaperText>
              <InputBulanan
                bulanan={bulanan}
                handleSetBulanan={handleSetBulanan}
                studentBillDetails={studentBillDetails}
              />
            </Card.Content>
          )}

          {studentBill.bill_type === 'Semester' && (
            <Card.Content>
              <PaperText
                variant="bodySmall"
                style={{marginBottom: 5, color: theme.txt}}>
                Pilih Semester:
              </PaperText>
              <InputSemester
                semester={semester}
                handleSetSemesterGasal={handleSetSemesterGasal}
                handleSetSemesterGenap={handleSetSemesterGenap}
                studentBillDetails={studentBillDetails}
              />
            </Card.Content>
          )}
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
          disabled={error.length > 0}
          onPress={handleSavePayment}
          style={[globalStyle.btn, style.buttonContainer]}>
          <Text
            style={[globalStyle.btntxt, error.length > 0 && {opacity: 0.6}]}>
            Simpan
          </Text>
        </TouchableOpacity>
      </View>
    </AlertNotificationRoot>
  );
};

export default BulananSemester;
