import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Card,
  Text as PaperText,
  DataTable,
  Divider,
  Chip,
} from 'react-native-paper';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';
import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';
import {useSelector} from 'react-redux';

import {getStudentBillDetails} from '../../../../data/api/studentBillsReq';
import {rupiah} from '../../../../utils/common';

const DetailBulananSemester = ({studentBill}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [emptyState, setEmptyState] = useState(
    'Pilih tahun ajaran untuk menampilkan data',
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleFetchStudentBillDetails = async () => {
      setLoading(true);
      const result = await getStudentBillDetails(
        studentBill.student_id,
        studentBill.school_bill_id,
        studentBill.bill_type,
      );

      if (!result.success) {
        setEmptyState('Data tidak ditemukan');
      } else {
        setData(result.success && result.studentBillDetails);
      }

      setLoading(false);
    };

    if (data.length === 0) {
      handleFetchStudentBillDetails();
    }
  }, [
    data.length,
    studentBill.school_bill_id,
    studentBill.student_id,
    studentBill.bill_type,
  ]);

  return (
    <View>
      <Card style={[style.cardContainer, {backgroundColor: theme.bg}]}>
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
          <Chip icon="information" style={{color: theme.txt, width: 210}}>
            Rincian Tagihan Sekolah
          </Chip>
        </Card.Content>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              {studentBill.bill_type === 'Bulanan' ? 'Bulan' : 'Semester'}
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: theme.txt}}>Dibayar</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: theme.txt}}>Kekurangan</Text>
            </DataTable.Title>
          </DataTable.Header>
          {loading && <LoadingStack />}
          {!loading &&
            data.map(item => (
              <DataTable.Row style={{alignItems: 'center'}} key={item.id}>
                <DataTable.Cell>
                  <Text style={{color: theme.txt}}>{item.name}</Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={{color: theme.txt}}>
                    {rupiah(item.amount_paid)}
                  </Text>
                </DataTable.Cell>
                <DataTable.Cell numeric>
                  <Text style={{color: theme.txt}}>
                    {Number(studentBill.nominal_set) === 1
                      ? rupiah(studentBill.nominal - item.amount_paid)
                      : '-'}
                  </Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          {!loading && <Divider />}
          {!loading && (
            <DataTable.Row key={20}>
              <DataTable.Cell>
                <Text style={{color: theme.txt}}>Grand Total</Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: theme.txt}}>
                  {rupiah(studentBill.total_amount_paid)}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text style={{color: theme.txt}}>
                  {Number(studentBill.nominal_set) === 1
                    ? rupiah(studentBill.total_amount_unpaid)
                    : '-'}
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </Card>
      {!loading && (
        <TouchableOpacity
          onPress={async () =>
            navigation.navigate(Routes.CreatePayment, {
              studentBill,
              studentBillDetails: data,
            })
          }
          style={[globalStyle.btn, style.buttonContainer]}>
          <Text style={[globalStyle.btntxt, {}]}>Buat Pembayaran</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DetailBulananSemester;
