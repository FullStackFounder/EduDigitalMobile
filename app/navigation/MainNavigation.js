import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';

import Login from '../screens/global/Login/Login';
import OTP from '../screens/global/OTP/OTP';
import MyParentTabs from '../navigator/MyParentTabs';
import Menu from '../screens/parents/Menu/Menu';
import Settings from '../screens/global/Settings/Settings';
import ChangeTheme from '../screens/global/ChangeTheme/ChangeTheme';
import ChangePassword from '../screens/global/ChangePassword/ChangePassword';
import Notification from '../screens/global/Notification/Notification';
import NotificationDetails from '../screens/global/Notification/NotificationDetails';
import SchoolBills from '../screens/parents/SchoolBills/SchoolBills';
import StudentBillDetail from '../screens/parents/SchoolBills/StudentBillDetail/StudentBillDetail';
import CreatePayment from '../screens/parents/SchoolBills/CreatePayment/CreatePayment';
import PaymentMethod from '../screens/parents/SchoolPayment/PaymentMethod/PaymentMethod';
import PaymentProcess from '../screens/parents/SchoolPayment/PaymentProcess/PaymentProcess';
import PaymentSuccess from '../screens/parents/SchoolPayment/PaymentProcess/PaymentSuccess';
import PaymentFail from '../screens/parents/SchoolPayment/PaymentProcess/PaymentFail';
import Invoice from '../screens/parents/SchoolBills/Invoice/Invoice';
import ViewTransaction from '../screens/parents/SchoolBills/TransactionHistory/ViewTransaction';
import Academic from '../screens/parents/Academic/Academic';
// import Registration from '../screens/Registration/Registration';
// import Home from '../screens/Home/Home';
// import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
// import Payment from '../screens/Payment/Payment';

const Stack = createStackNavigator();

export const NonAuthenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.OTP} component={OTP} />
    </Stack.Navigator>
  );
};

export const Authenticated = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.MyParentTabs}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.MyParentTabs} component={MyParentTabs} />
      <Stack.Screen name={Routes.Menu} component={Menu} />
      <Stack.Screen name={Routes.Settings} component={Settings} />
      <Stack.Screen name={Routes.ChangeTheme} component={ChangeTheme} />
      <Stack.Screen name={Routes.ChangePassword} component={ChangePassword} />
      <Stack.Screen name={Routes.Notification} component={Notification} />
      <Stack.Screen
        name={Routes.NotificationDetails}
        component={NotificationDetails}
      />
      <Stack.Screen name={Routes.SchoolBills} component={SchoolBills} />
      <Stack.Screen
        name={Routes.StudentBillDetail}
        component={StudentBillDetail}
      />
      <Stack.Screen name={Routes.CreatePayment} component={CreatePayment} />
      <Stack.Screen name={Routes.PaymentMethod} component={PaymentMethod} />
      <Stack.Screen name={Routes.PaymentProcess} component={PaymentProcess} />
      <Stack.Screen name={Routes.PaymentSuccess} component={PaymentSuccess} />
      <Stack.Screen name={Routes.PaymentFail} component={PaymentFail} />
      <Stack.Screen name={Routes.Invoice} component={Invoice} />
      <Stack.Screen name={Routes.ViewTransaction} component={ViewTransaction} />
      <Stack.Screen name={Routes.Academic} component={Academic} />
    </Stack.Navigator>
  );
};
