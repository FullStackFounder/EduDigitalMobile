/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
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
  Switch,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, RadioButton} from 'react-native-paper';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {Routes} from '../../../navigation/Routes';

import {useSelector, useDispatch} from 'react-redux';
import {updateTheme} from '../../../data/redux/reducers/Theme';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const ChangeTheme = () => {
  const {defaultTheme, theme} = useSelector(state => state.theme);
  const dispatch = useDispatch();

  //   const theme = useContext(themeContext);
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(
    defaultTheme === 'light' ? false : true,
  );

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {paddingTop: 20}]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppBar
            color={theme.b}
            title="Tema"
            titleStyle={[globalStyle.m18, {color: theme.txt}]}
            centerTitle={true}
            elevation={0}
            leading={
              <TouchableOpacity
                onPress={() => navigation.navigate(Routes.Settings)}>
                <Avatar.Icon
                  icon="arrow-left"
                  size={45}
                  color={theme.txt}
                  style={{backgroundColor: theme.btnbg}}
                />
              </TouchableOpacity>
            }
          />

          <View
            style={{
              backgroundColor: theme.back,
              padding: 20,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              borderRadius: 15,
            }}>
            <Icon name="moon-outline" size={25} color={theme.txt} />
            <View style={{flex: 1, marginLeft: 15}}>
              <Text style={[globalStyle.b14, {color: theme.txt}]}>
                Mode Gelap
              </Text>
            </View>
            <Switch
              value={darkMode}
              onValueChange={value => {
                setDarkMode(value);
                dispatch(updateTheme(value ? 'dark' : 'light'));
                // EventRegister.emit('ChangeTheme', value);
              }}
              trackColor={{false: '#00000020', true: theme.border}}
              thumbColor={darkMode ? theme.m : '#f4f3f4'}
              ios_backgroundColor="#FFFFFF"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChangeTheme;
