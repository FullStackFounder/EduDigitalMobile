/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useContext} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../components/theme/color';
import themeContext from '../components/theme/themeContext';
import theme from '../components/theme/theme';
import Dash from '../screens/parents/Dash/Dash';
import Task from '../screens/parents/Task/Task';
import EnterPasscode from '../screens/parents/EnterPasscode/EnterPasscode';
import Menu from '../screens/parents/Menu/Menu';
import SuggestF from '../screens/parents/SuggestF/SuggestF';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Tab = createBottomTabNavigator();

const MyParentTabs = () => {
  //   const theme = useContext(themeContext);
  //   const [darkMode, setDarkMode] = useState('false');

  return (
    <Tab.Navigator
      screenOptions={{
        // BottomTabBarHeight:30,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: theme.light.tc,
          height: 70,
          marginHorizontal: 20,
          marginBottom: 20,
          borderRadius: 50,
          shadowColor: Colors.active,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Dash}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? Colors.primary : theme.light.tc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/images/tab1.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? Colors.secondary : theme.light.txt,
                  }}
                />
              </View>
            );
          },

          headerShown: false,
        }}
      />

      <Tab.Screen
        name="MyTask"
        component={Task}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? Colors.primary : theme.light.tc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/images/tab2.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? Colors.secondary : theme.light.txt,
                  }}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="MyDrawer"
        component={EnterPasscode}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? Colors.primary : theme.light.tc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/images/tab3.png')}
                  style={{
                    height: 28,
                    width: 28,
                    tintColor: focused ? Colors.secondary : theme.light.txt,
                  }}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Login"
        component={SuggestF}
        options={{
          tabBarShowLabel: false,

          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? Colors.primary : theme.light.tc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/images/tab4.png')}
                  style={{
                    height: 28,
                    width: 28,
                    tintColor: focused ? Colors.secondary : theme.light.txt,
                  }}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Menu}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color}) => {
            return (
              <View
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: focused ? Colors.primary : theme.light.tc,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/images/tab5.png')}
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: focused ? Colors.secondary : theme.light.txt,
                  }}
                />
              </View>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MyParentTabs;
