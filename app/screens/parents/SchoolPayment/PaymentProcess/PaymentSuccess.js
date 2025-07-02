import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Span,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {Colors} from '../../../../components/theme/color';
import globalStyle from '../../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Routes} from '../../../../navigation/Routes';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const PaymentSuccess = props => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {backgroundColor: theme.b}]}>
        <AppBar
          style={{backgroundColor: theme.b, marginTop: 15}}
          elevation={0}
          trailing={
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Routes.MyParentTabs, {
                  screen: 'Tagihan',
                })
              }>
              <Avatar.Icon
                icon="close"
                style={{backgroundColor: theme.icon}}
                color={theme.txt}
                size={45}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <Image
            source={theme.s7}
            style={{
              height: height / 2,
              width: width - 40,
              resizeMode: 'stretch',
            }}
          />
          <Text
            style={[
              globalStyle.apptitle,
              {color: theme.txt, marginTop: 5, textAlign: 'center'},
            ]}>
            Bukti Pembayaran Dikirim!
          </Text>
          <Text
            style={[
              globalStyle.r14,
              {
                color: theme.disable,
                marginTop: 10,
                textAlign: 'center',
                lineHeight: 22,
              },
            ]}>
            Pembayaran sedang proses verifikasi oleh Admin Sekolah. Jika proses
            verifikasi berhasil status pembayaran akan menjadi "Dibayar".
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Routes.MyParentTabs, {
                screen: 'Tagihan',
              })
            }
            style={[globalStyle.btn, {marginVertical: 20}]}>
            <Text style={[globalStyle.btntxt, {}]}>Kembali</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccess;
