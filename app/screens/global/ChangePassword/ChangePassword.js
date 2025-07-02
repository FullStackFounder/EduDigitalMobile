/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppBar} from '@react-native-material/core';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from 'react-native-alert-notification';
import LoadingStack from '../../../components/LoadingStack/LoadingStack';
import {Routes} from '../../../navigation/Routes';

import style from './style';

import {useSelector} from 'react-redux';
import {changePassword} from '../../../data/api/auth';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ChangePassword = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [verify1, setVerify1] = useState(false);
  const [verify2, setVerify2] = useState(false);
  const [verify3, setVerify3] = useState(false);
  const [verify4, setVerify4] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOnTypePassword = value => {
    setPassword(value);
    if (value.length >= 6) {
      setVerify1(true);
    } else {
      setVerify1(false);
    }

    function allCases(string) {
      const upper = /[A-Z]/.test(string),
        lower = /[a-z]/.test(string);

      return upper && lower;
    }

    if (allCases(value)) {
      setVerify2(true);
    } else {
      setVerify2(false);
    }

    function containsNumber(str) {
      return str.match(/\d+/) !== null;
    }

    const regex = /[!@$%^&-+=:;/|\\]/;

    if (containsNumber(value) && regex.test(value)) {
      setVerify3(true);
    } else {
      setVerify3(false);
    }
  };

  const handleRetypePassword = value => {
    setRetypePassword(value);

    if (value === password) {
      setVerify4(true);
    } else {
      setVerify4(false);
    }
  };

  const handleChangePassword = async () => {
    if (!password) {
      setError('Mohon isikan kata sandi baru.');

      return true;
    }

    if (!retypePassword) {
      setError('Mohon ketikkan ulang kata sandi.');

      return true;
    }

    if (retypePassword !== password) {
      setError('Ketik ulang kata sandi salah.');

      return true;
    }

    if (retypePassword === password) {
      setError('');
    }

    if (error.length > 0) {
      return true;
    }

    setLoading(true);
    const result = await changePassword(retypePassword);

    if (!result.success) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        textBody: result.error,
        button: 'OK',
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        textBody: result.message,
        button: 'OK',
      });
    }
    setLoading(false);
  };

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}>
          {loading && <LoadingStack />}
          {!loading && (
            <View
              style={[
                globalStyle.main,
                {backgroundColor: theme.b, marginTop: 15},
              ]}>
              <AppBar
                style={{backgroundColor: theme.b}}
                elevation={0}
                leading={
                  <Image
                    source={require('../../../../assets/images/Lock.png')}
                    resizeMode="stretch"
                    style={{
                      height: height / 30,
                      width: width / 13,
                      alignSelf: 'center',
                    }}
                  />
                }
                trailing={
                  <TouchableOpacity
                    onPress={() => navigation.navigate(Routes.Settings)}>
                    <Avatar.Icon
                      icon="close"
                      style={{backgroundColor: theme.icon}}
                      size={45}
                      color={theme.txt}
                    />
                  </TouchableOpacity>
                }
              />
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text
                  style={[
                    globalStyle.apptitle,
                    {color: theme.txt, marginTop: 30},
                  ]}>
                  Ubah Kata Sandi
                </Text>
                <Text
                  style={[
                    globalStyle.r14,
                    {color: theme.disable, marginTop: 5},
                  ]}>
                  Buat kata sandi Anda
                </Text>

                <View
                  style={{
                    borderWidth: 1,
                    borderColor: theme.border,
                    borderRadius: 20,
                    marginTop: 40,
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
                        Buat kata sandi
                      </Text>
                      <TextInput
                        placeholder="......"
                        selectionColor={Colors.primary}
                        placeholderTextColor={theme.txt}
                        style={[
                          globalStyle.m16,
                          {
                            color: theme.txt,
                            flex: 1,
                            marginRight: 10,
                            marginBottom: 10,
                          },
                        ]}
                        onChangeText={value => handleOnTypePassword(value)}
                      />
                    </View>
                    <TouchableOpacity>
                      <Icons name="lock-outline" size={25} color={theme.txt} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={[
                      globalStyle.divider,
                      {backgroundColor: theme.border},
                    ]}
                  />

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
                        Ketik ulang kata sandi
                      </Text>
                      <TextInput
                        placeholder="......"
                        selectionColor={Colors.primary}
                        placeholderTextColor={theme.txt}
                        style={[
                          globalStyle.m16,
                          {
                            color: theme.txt,
                            flex: 1,
                            marginRight: 10,
                            marginBottom: 10,
                          },
                        ]}
                        onChangeText={value => handleRetypePassword(value)}
                      />
                    </View>
                    <TouchableOpacity>
                      {verify4 && (
                        <Icon
                          name="checkmark-circle"
                          size={24}
                          color={Colors.g}
                        />
                      )}
                      {!verify4 && (
                        <Icon
                          name="checkmark-circle-outline"
                          size={24}
                          color={theme.disable}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginLeft: 20,
                  }}>
                  {verify1 && (
                    <Icon name="checkmark-circle" size={20} color={Colors.g} />
                  )}
                  {!verify1 && (
                    <Icon
                      name="checkmark-circle-outline"
                      size={20}
                      color={theme.disable}
                    />
                  )}
                  <Text
                    style={[
                      globalStyle.r14,
                      {color: theme.txt, marginLeft: 10},
                    ]}>
                    6 karakter atau lebih.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    marginLeft: 20,
                  }}>
                  {verify2 && (
                    <Icon name="checkmark-circle" size={20} color={Colors.g} />
                  )}
                  {!verify2 && (
                    <Icon
                      name="checkmark-circle-outline"
                      size={20}
                      color={theme.disable}
                    />
                  )}
                  <Text
                    style={[
                      globalStyle.r14,
                      {color: theme.txt, marginLeft: 10},
                    ]}>
                    Gunakan huruf besar dan kecil.
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    marginLeft: 20,
                  }}>
                  {verify3 && (
                    <Icon name="checkmark-circle" size={20} color={Colors.g} />
                  )}
                  {!verify3 && (
                    <Icon
                      name="checkmark-circle-outline"
                      size={20}
                      color={theme.disable}
                    />
                  )}
                  <Text
                    style={[
                      globalStyle.r14,
                      {color: theme.txt, marginLeft: 10},
                    ]}>
                    Minimal 1 angka atau karakter khusus (! @ $ % ^ & - + = :
                    ;).
                  </Text>
                </View>

                {error.length > 0 && <Text style={[style.error]}>{error}</Text>}

                <View style={{marginTop: 50, marginBottom: 20}}>
                  <TouchableOpacity
                    onPress={handleChangePassword}
                    style={[globalStyle.btn, {}]}>
                    <Text style={[globalStyle.btntxt, {}]}>
                      Simpan Kata Sandi
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          )}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default ChangePassword;
