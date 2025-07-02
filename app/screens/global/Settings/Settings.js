/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppBar} from '@react-native-material/core';
import {Routes} from '../../../navigation/Routes';

import {useSelector} from 'react-redux';

const Settings = () => {
  const {defaultTheme, theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View
        style={[globalStyle.main, {backgroundColor: theme.b, marginTop: 15}]}>
        <AppBar
          style={{backgroundColor: theme.b}}
          elevation={0}
          centerTitle={true}
          title="Pengaturan"
          titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
          leading={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Avatar.Icon
                icon="arrow-left"
                style={{backgroundColor: theme.btnbg}}
                color={theme.txt}
                size={45}
              />
            </TouchableOpacity>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.ChangeTheme)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                backgroundColor: theme.back,
                borderRadius: 10,
                marginTop: 5,
              }}>
              <Icon name="pricetags-outline" size={25} color={theme.txt} />
              <View style={{marginLeft: 10, flex: 1}}>
                <Text style={[globalStyle.b14, {color: theme.txt}]}>Tema</Text>
                <Text style={[globalStyle.r12, {color: theme.disable}]}>
                  {defaultTheme === 'light' ? 'Mode Terang' : 'Mode Gelap'}
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={theme.txt} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.ChangePassword)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 12,
                backgroundColor: theme.back,
                borderRadius: 10,
                marginTop: 5,
              }}>
              <Icons name="lock-outline" size={25} color={theme.txt} />
              <View style={{marginLeft: 10, flex: 1}}>
                <Text style={[globalStyle.b14, {color: theme.txt}]}>
                  Ubah Kata Sandi
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={theme.txt} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
