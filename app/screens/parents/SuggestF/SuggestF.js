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

const SuggestF = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {paddingTop: 20}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={theme.c5}
            style={{
              width: width / 12,
              height: height / 30,
              marginHorizontal: 15,
            }}
            resizeMode="stretch"
          />
          <Text
            style={[
              globalStyle.subtitle,
              {color: theme.txt, flex: 1, marginLeft: 10},
            ]}>
            Feed
          </Text>
          <Icon name="search" size={20} color={theme.txt} />
          <Image
            source={theme.a5}
            style={{
              width: width / 11,
              height: height / 25,
              marginHorizontal: 15,
            }}
            resizeMode="stretch"
          />
          <Avatar.Image
            source={require('../../../../assets/images/d2.png')}
            size={38}
            style={{backgroundColor: theme.bg}}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: theme.back,
              padding: 20,
              borderRadius: 15,
              marginTop: 15,
            }}>
            <View style={{alignItems: 'flex-end'}}>
              <Icon name="close" size={20} color={theme.txt} />
            </View>
            <Image
              source={theme.c6}
              style={{
                width: width / 4,
                height: height / 9,
                marginHorizontal: 15,
                alignSelf: 'center',
                marginTop: 20,
              }}
              resizeMode="stretch"
            />
            <Text
              style={[
                globalStyle.subtitle,
                {color: theme.txt, textAlign: 'center', marginTop: 15},
              ]}>
              Create post?
            </Text>
            <Text
              style={[
                globalStyle.r14,
                {color: theme.disable, textAlign: 'center', marginTop: 5},
              ]}>
              Share task or post your content
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('TabF')}
              style={{
                alignSelf: 'center',
                backgroundColor: Colors.g,
                height: 60,
                width: 60,
                borderRadius: 35,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <Icon name="add-sharp" size={25} color={Colors.secondary} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: theme.back,
              padding: 20,
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Text
              style={[
                globalStyle.subtitle,
                {color: theme.txt, textAlign: 'center', marginTop: 15},
              ]}>
              Find more friend
            </Text>
            <Text
              style={[
                globalStyle.r14,
                {color: theme.disable, textAlign: 'center', marginTop: 5},
              ]}>
              Search with school, location,...
            </Text>

            <View
              style={{
                backgroundColor: theme.b1,
                paddingVertical: 12,
                paddingHorizontal: 15,
                marginTop: 20,
                borderRadius: 25,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Avatar.Image
                  source={require('../../../../assets/images/d2.png')}
                  style={{backgroundColor: theme.bg}}
                  size={30}
                />
                <Avatar.Image
                  source={require('../../../../assets/images/d2.png')}
                  style={{backgroundColor: theme.bg, marginLeft: -7}}
                  size={30}
                />
                <Avatar.Image
                  source={require('../../../../assets/images/s12.png')}
                  style={{backgroundColor: theme.bg, marginLeft: -7}}
                  size={30}
                />
                <Text
                  style={[globalStyle.m12, {color: theme.txt, marginLeft: 8}]}>
                  Add more friend
                </Text>
              </View>
              <Icon name="arrow-forward" size={20} color={theme.txt} />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SuggestF;
