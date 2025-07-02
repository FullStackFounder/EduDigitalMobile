import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  Card,
  Text as PaperText,
  DataTable,
  Divider,
  Chip,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

import {rupiah} from '../../../../utils/common';

const DetailOthers = ({studentBill}) => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

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
            <DataTable.Title numeric>
              <Text style={{color: theme.txt}}>Dibayar</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={{color: theme.txt}}>Kekurangan</Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={{marginVertical: 5}} key={20}>
            <DataTable.Cell numeric>
              <Text style={{color: theme.txt}}>
                {rupiah(studentBill.total_amount_paid)}
              </Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={{color: theme.txt}}>
                {Number(studentBill.nominal_set === 1)
                  ? rupiah(studentBill.total_amount_unpaid)
                  : '-'}
              </Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </Card>
      <TouchableOpacity
        onPress={async () =>
          navigation.navigate(Routes.CreatePayment, {
            studentBill,
          })
        }
        style={[globalStyle.btn, style.buttonContainer]}>
        <Text style={[globalStyle.btntxt, {}]}>Buat Pembayaran</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailOthers;
