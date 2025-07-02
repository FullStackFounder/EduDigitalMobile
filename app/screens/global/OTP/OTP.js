/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import OtpInputs from 'react-native-otp-inputs';
import LoadingStack from '../../../components/LoadingStack/LoadingStack';
import Clipboard from '@react-native-clipboard/clipboard';
import {Routes} from '../../../navigation/Routes';

import {useSelector} from 'react-redux';
import {verifyOTPUser} from '../../../data/api/auth';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const OTP = () => {
  const {theme} = useSelector(state => state.theme);
  const user = useSelector(state => state.user);
  const navigation = useNavigation();

  let otpInput = useRef(null);
  const [inputOTP, setInputOTP] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = code => {
    setInputOTP(code);
  };

  const handleVerifyOTP = async () => {
    const otp = Number(otpInput.current.value);
    setLoading(true);
    const result = await verifyOTPUser(user.userId, otp, user.sessionToken);

    if (!result.success) {
      setError(result.error);
    } else {
      navigation.navigate(Routes.MyParentTabs);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.bg}]}>
      {loading && <LoadingStack />}
      {!loading && (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          <View style={[globalStyle.main, {backgroundColor: theme.bg}]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Image
                source={require('../../../../assets/images/Lock.png')}
                resizeMode="stretch"
                style={{
                  height: height / 30,
                  width: width / 13,
                  alignSelf: 'center',
                  marginTop: 50,
                }}
              />

              <Text
                style={[
                  globalStyle.apptitle,
                  {color: theme.txt, marginTop: 30, textAlign: 'center'},
                ]}>
                Masuk ke Appso!
              </Text>
              <Text
                style={[
                  globalStyle.r14,
                  {color: theme.disable, marginTop: 5, textAlign: 'center'},
                ]}>
                Ketik ulang kode OTP di bawah
              </Text>
              <View style={{alignItems: 'center', marginVertical: 10}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: theme.btnbg,
                    paddingVertical: 6,
                    borderRadius: 20,
                    paddingHorizontal: 15,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    {user.otp}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{paddingVertical: 20}}>
                <OtpInputs
                  ref={otpInput}
                  Clipboard={Clipboard}
                  numberOfInputs={4}
                  selectionColor={theme.txt}
                  style={{flexDirection: 'row', justifyContent: 'center'}}
                  inputStyles={{
                    borderColor: theme.border,
                    // backgroundColor: theme.bg,
                    // borderRadius: 10,
                    textAlign: 'center',
                    height: 70,
                    width: 78,
                    fontSize: 20,
                    borderWidth: 1,
                    color: theme.txt,
                    fontWeight: 'bold',
                  }}
                  handleChange={value => (otpInput.current.value = value)}
                />
                {error.length > 0 && <Text style={[style.error]}>{error}</Text>}
              </View>

              <TouchableOpacity
                onPress={handleVerifyOTP}
                style={[
                  globalStyle.btn,
                  {backgroundColor: Colors.primary, marginVertical: 20},
                ]}>
                <Text style={[globalStyle.btntxt, {color: Colors.secondary}]}>
                  Masuk
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default OTP;
