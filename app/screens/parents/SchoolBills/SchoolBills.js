import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SelectedStudent from '../../../components/SelectedStudent/SelectedStudent';
import StudentBills from './StudentBills/StudentBills';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import {useSelector} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = createMaterialTopTabNavigator();

const TopNavigator = props => {
  const {theme} = useSelector(state => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.b,
          paddingHorizontal: 40,
          marginHorizontal: -10,
          elevation: 0,
        },
        tabBarShowLabel: true,
        swipeEnabled: false,
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarAndroidRipple: {borderless: false},
      }}>
      <Tab.Screen
        name="TagihanSekolah"
        children={() => <StudentBills isRefresh={props.isRefresh} />}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <View
              style={{
                borderRadius: 25,
                backgroundColor: focused ? Colors.primary : theme.b1,
                paddingVertical: 8,
                width: width / 3,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="pricetags-outline"
                color={focused ? Colors.secondary : theme.txt}
                size={15}
              />
              <Text
                style={[
                  globalStyle.m12,
                  {
                    color: focused ? Colors.secondary : theme.txt,
                    textAlign: 'center',
                    marginLeft: 5,
                  },
                ]}>
                Tagihan Sekolah
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RiwayatTransaksi"
        children={() => <TransactionHistory isRefresh={props.isRefresh} />}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <View
              style={{
                borderRadius: 25,
                backgroundColor: focused ? Colors.primary : theme.b1,
                paddingVertical: 8,
                width: width / 3,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="grid-outline"
                color={focused ? Colors.secondary : theme.txt}
                size={15}
              />
              <Text
                style={[
                  globalStyle.m12,
                  {
                    color: focused ? Colors.secondary : theme.txt,
                    textAlign: 'center',
                    marginLeft: 5,
                  },
                ]}>
                Riwayat Transaksi
              </Text>
            </View>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const SchoolBills = props => {
  const {theme} = useSelector(state => state.theme);
  const isRefresh = props.route.params?.isRefresh;

  console.log('>> SchoolBills props.route: ', props.route);

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View
          style={[globalStyle.main, {backgroundColor: theme.b, marginTop: 15}]}>
          <TopNavigator isRefresh={isRefresh} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SchoolBills;
