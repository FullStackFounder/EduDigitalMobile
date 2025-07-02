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
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Academic = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {paddingTop: 20}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={[
              globalStyle.subtitle,
              {color: theme.txt, flex: 1, marginLeft: 10},
            ]}>
            Akademik
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: theme.back,
              padding: 20,
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Image
              source={theme.comingsoon}
              style={{
                width: width / 2,
                height: height / 4,
                marginHorizontal: 15,
                alignSelf: 'center',
                marginTop: 20,
              }}
              resizeMode="stretch"
            />
            <Text
              style={[
                globalStyle.r14,
                {color: theme.disable, textAlign: 'center', marginTop: 5},
              ]}>
              Halaman ini sedang dilakukan maintenance.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Academic;
