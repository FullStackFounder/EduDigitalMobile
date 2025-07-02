import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import {Text as PaperText} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/theme/color';
import Loading from '../../../components/Loading/Loading';

import globalStyle from '../../../components/theme/globalStyle';
import style from './style';

import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from '../../../navigation/Routes';

import {useSelector} from 'react-redux';

import {loginUser, loginUserWithPhone} from '../../../data/api/auth';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = createMaterialTopTabNavigator();

const TopNavigator = props => {
  const {theme} = useSelector(state => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.bg,
          paddingHorizontal: 40,
          elevation: 0,
        },
        //   tabBarLabelStyle: {
        //   // fontSize: 16,
        // },
        tabBarShowLabel: true,
        // tabBarItemStyle:{},
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarAndroidRipple: {
          borderless: false,
        },
      }}>
      <Tab.Screen
        name="Email"
        // component={Email}
        children={() => (
          <Email
            handleSetEmail={props.handleSetEmail}
            handleSetPassword={props.handleSetPassword}
          />
        )}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <View
              style={[
                style.emailTabContainer,
                {
                  backgroundColor: focused ? theme.btn1 : theme.btn2,
                  width: width / 4,
                },
              ]}>
              <Text
                style={[
                  globalStyle.m12,
                  {
                    color: focused ? Colors.secondary : theme.txt,
                  },
                  style.emailTabText,
                ]}>
                Email
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Phone"
        children={() => (
          <Phone
            handleSetPhoneNumber={props.handleSetPhoneNumber}
            handleSetPassword={props.handleSetPassword}
          />
        )}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <View
              style={[
                {
                  backgroundColor: focused ? theme.btn1 : theme.btn2,
                  width: width / 4,
                },
                style.phoneTabContainer,
              ]}>
              <Text
                style={[
                  globalStyle.m12,
                  {
                    color: focused ? Colors.secondary : theme.txt,
                  },
                  style.phoneTabText,
                ]}>
                Ponsel
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Email = props => {
  const {theme} = useSelector(state => state.theme);

  return (
    <SafeAreaView
      style={[globalStyle.area, {backgroundColor: theme.bg, paddingTop: 40}]}>
      <View style={{backgroundColor: theme.bg, marginHorizontal: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.border,
            borderRadius: 20,
            marginBottom: 20,
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
                Email
              </Text>
              <TextInput
                keyboardType={'email-address'}
                placeholder="Masukkan Email ..."
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  globalStyle.m16,
                  {
                    color: theme.txt,
                    flex: 1,
                    marginRight: 10,
                    marginBottom: 10,
                  },
                ]}
                onChangeText={value => props.handleSetEmail(value)}
              />
            </View>
            <TouchableOpacity>
              <Icon name="mail-outline" color={Colors.disable} size={20} />
            </TouchableOpacity>
          </View>

          <View
            style={[globalStyle.divider, {backgroundColor: theme.border}]}
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
                Kata Sandi
              </Text>
              <TextInput
                placeholder="Masukkan Kata Sandi ..."
                secureTextEntry={true}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  globalStyle.m16,
                  {
                    color: theme.txt,
                    flex: 1,
                    marginRight: 10,
                    marginBottom: 10,
                  },
                ]}
                onChangeText={value => props.handleSetPassword(value)}
              />
            </View>
            <TouchableOpacity>
              <Icon
                name="lock-closed-outline"
                color={Colors.disable}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Phone = props => {
  const {theme} = useSelector(state => state.theme);

  return (
    <SafeAreaView
      style={[globalStyle.area, {backgroundColor: theme.bg, paddingTop: 40}]}>
      <View style={{backgroundColor: theme.bg, marginHorizontal: 20}}>
        <View
          style={{
            borderWidth: 1,
            borderColor: theme.border,
            borderRadius: 20,
            marginBottom: 20,
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
                Nomor Ponsel
              </Text>
              <TextInput
                placeholder="Masukkan Nomor Ponsel ..."
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  globalStyle.m16,
                  {
                    color: theme.txt,
                    flex: 1,
                    marginRight: 10,
                    marginBottom: 10,
                  },
                ]}
                onChangeText={value => props.handleSetPhoneNumber(value)}
              />
            </View>
            <TouchableOpacity>
              <Icon
                name="phone-portrait-outline"
                color={Colors.disable}
                size={20}
              />
            </TouchableOpacity>
          </View>

          <View
            style={[globalStyle.divider, {backgroundColor: theme.border}]}
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
                Kata Sandi
              </Text>
              <TextInput
                placeholder="Masukkan Kata Sandi ..."
                secureTextEntry={true}
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  globalStyle.m16,
                  {
                    color: theme.txt,
                    flex: 1,
                    marginRight: 10,
                    marginBottom: 10,
                  },
                ]}
                onChangeText={value => props.handleSetPassword(value)}
              />
            </View>
            <TouchableOpacity>
              <Icon
                name="lock-closed-outline"
                color={Colors.disable}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const Login = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('email');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSetEmail = value => {
    setSelectedTab('email');
    setEmail(value);
  };

  const handleSetPhoneNumber = value => {
    setSelectedTab('phone');
    setPhoneNumber(value);
  };

  const handleSetPassword = value => {
    setPassword(value);
  };

  const handleLogin = async () => {
    setLoading(true);
    const result =
      selectedTab === 'email'
        ? await loginUser(email, password)
        : await loginUserWithPhone(phoneNumber, password);

    if (!result.success) {
      setError(result.error);
    } else {
      navigation.navigate(Routes.OTP);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView
      style={[
        globalStyle.area,
        {backgroundColor: theme.bg},
        style.loginContainer,
      ]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={style.keyboardContainer}>
        {/* <View style={{flex:1,marginHorizontal:20,paddingTop:10}}> */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{height: height}}>
          <Image
            source={require('../../../../assets/images/appso.png')}
            resizeMode="stretch"
            style={[style.image, {height: height / 20, width: width / 8}]}
          />

          <Text style={[globalStyle.apptitle, {color: theme.txt}, style.title]}>
            APPSO
          </Text>
          <Text
            style={[
              globalStyle.r14,
              {
                color: theme.disable,
              },
              style.description,
            ]}>
            Aplikasi Sekolah Online Karya Anak Negeri
          </Text>

          <View style={style.topNavigatorContainer}>
            <TopNavigator
              handleSetEmail={handleSetEmail}
              handleSetPhoneNumber={handleSetPhoneNumber}
              handleSetPassword={handleSetPassword}
            />
            {error.length > 0 && <Text style={[style.error]}>{error}</Text>}
          </View>
          <View style={style.buttonLoginContainer}>
            {loading && <Loading />}
            {!loading && (
              <TouchableOpacity
                onPress={handleLogin}
                style={[globalStyle.btn, {}]}>
                <Text style={[globalStyle.btntxt, {}]}>Masuk</Text>
              </TouchableOpacity>
            )}
          </View>

          {!loading && (
            <View style={style.buttonRegisterContainer}>
              <Text style={[globalStyle.b16, {color: theme.txt}]}>
                Belum punya akun?
              </Text>
              <TouchableOpacity
                onPress={async () =>
                  await Linking.openURL('https://appso.id/register')
                }>
                <Text style={[globalStyle.b14, {color: Colors.primary}]}>
                  {' '}
                  Daftar
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
