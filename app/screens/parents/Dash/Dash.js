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
  ImageBackground,
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Span,
  Platform,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {color} from 'react-native-elements/dist/helpers';
import {Routes} from '../../../navigation/Routes';

import {useSelector, useDispatch} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Dash = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[globalStyle.area, {backgroundColor: theme.b, paddingTop: 10}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View style={[globalStyle.main, {paddingTop: 10}]}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
            <Image
              source={theme.a4}
              style={{width: width / 11, height: height / 25}}
              resizeMode="stretch"
            />
            <Text
              style={[
                globalStyle.subtitle,
                {color: theme.txt, flex: 1, marginLeft: 10},
              ]}>
              Dashboard
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              height: Platform.OS === 'ios' ? height : height / 1.1,
            }}>
            <View style={{marginTop: 25}}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    padding: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: Colors.primary,
                    borderRadius: 40,
                  }}>
                  <Image
                    source={require('../../../../assets/images/a6.png')}
                    resizeMode="stretch"
                    style={{height: height / 18, width: width / 8}}
                  />
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={[globalStyle.b12, {color: Colors.secondary}]}>
                      Math test
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <View
                        style={{
                          borderWidth: 3,
                          borderColor: Colors.secondary,
                          padding: 5,
                          borderRadius: 15,
                        }}
                      />
                      <Text
                        style={[
                          globalStyle.r10,
                          {color: '#FFFFFF70', marginLeft: 5},
                        ]}>
                        100 %
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{margin: 7}} />
                <View
                  style={{
                    padding: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: theme.bg,
                    borderRadius: 40,
                    paddingLeft: 20,
                  }}>
                  <Image
                    source={require('../../../../assets/images/a7.png')}
                    resizeMode="stretch"
                    style={{height: height / 18, width: width / 8}}
                  />
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={[globalStyle.b12, {color: theme.txt}]}>
                      Reading
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <Image
                        source={require('../../../../assets/images/a8.png')}
                        resizeMode="stretch"
                        style={{
                          height: height / 50,
                          width: width / 23,
                        }}
                      />
                      <Text
                        style={[
                          globalStyle.r10,
                          {color: theme.txt, marginLeft: 5},
                        ]}>
                        75 %
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{margin: 7}} />
                <View
                  style={{
                    padding: 15,
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: theme.bg,
                    borderRadius: 40,
                    paddingLeft: 20,
                  }}>
                  <Image
                    source={require('../../../../assets/images/a7.png')}
                    resizeMode="stretch"
                    style={{height: height / 18, width: width / 8}}
                  />
                  <View style={{marginLeft: 10, marginRight: 10}}>
                    <Text style={[globalStyle.b12, {color: theme.txt}]}>
                      Chemistry
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                      }}>
                      <Image
                        source={require('../../../../assets/images/a9.png')}
                        resizeMode="stretch"
                        style={{
                          height: height / 50,
                          width: width / 23,
                        }}
                      />
                      <Text
                        style={[
                          globalStyle.r10,
                          {color: theme.txt, marginLeft: 5},
                        ]}>
                        75 %
                      </Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Target')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: theme.back,
                  padding: 22,
                  borderRadius: 20,
                  marginTop: 25,
                }}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        backgroundColor: Colors.primary,
                        borderRadius: 10,
                        height: 8,
                        width: 8,
                      }}
                    />
                    <Text
                      style={[
                        globalStyle.b12,
                        {marginLeft: 10, color: theme.txt},
                      ]}>
                      AVERAGE TARGET
                    </Text>
                  </View>
                  <Text
                    style={[
                      globalStyle.apptitle,
                      {color: theme.txt, marginTop: 8},
                    ]}>
                    65%
                  </Text>
                </View>
                <Image
                  source={theme.a10}
                  resizeMode="stretch"
                  style={{height: height / 18, width: width / 8}}
                />
              </View>
            </TouchableOpacity>

            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <View style={{}}>
                <View
                  style={{
                    width: width / 2.15,
                    backgroundColor: theme.back,
                    paddingVertical: 20,
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginHorizontal: 10,
                      marginBottom: 10,
                    }}>
                    <Image
                      source={require('../../../../assets/images/a11.png')}
                      resizeMode="stretch"
                      style={{height: height / 25, width: width / 12}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text style={[globalStyle.b12, {color: theme.disable}]}>
                        WEEK
                      </Text>
                      <Icon
                        name="chevron-down"
                        size={20}
                        color={theme.disable}
                      />
                    </View>
                  </View>
                  <Image
                    source={require('../../../../assets/images/a12.png')}
                    resizeMode="stretch"
                    style={{width: width / 2.15, height: height / 12}}
                  />
                  <Text
                    style={[
                      globalStyle.b12,
                      {
                        color: theme.disable,
                        marginTop: 20,
                        marginHorizontal: 10,
                      },
                    ]}>
                    Join in class
                  </Text>
                  <Text
                    style={[
                      globalStyle.subtitle,
                      {
                        color: theme.txt,
                        marginHorizontal: 10,
                        marginTop: 5,
                      },
                    ]}>
                    65 Hours
                  </Text>
                </View>

                <View
                  style={{
                    width: width / 2.15,
                    backgroundColor: theme.back,
                    paddingVertical: 15,
                    borderRadius: 10,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingHorizontal: 15,
                      marginVertical: 10,
                    }}>
                    <View>
                      <Text style={[globalStyle.b12, {color: theme.disable}]}>
                        NEW POST
                      </Text>
                      <Text style={[globalStyle.subtitle, {color: theme.txt}]}>
                        85
                      </Text>
                    </View>
                    <Image
                      source={theme.a13}
                      resizeMode="stretch"
                      style={{height: height / 18, width: width / 8}}
                    />
                  </View>
                </View>
              </View>

              <View style={{margin: 5}} />

              <View style={{}}>
                <View
                  style={{
                    width: width / 2.5,
                    backgroundColor: theme.back,
                    paddingVertical: 15,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                  }}>
                  <Image
                    source={theme.a14}
                    resizeMode="stretch"
                    style={{height: height / 18, width: width / 8}}
                  />
                  <Text
                    style={[
                      globalStyle.b12,
                      {color: theme.txt, marginTop: 5, marginLeft: 7},
                    ]}>
                    TASK
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: theme.btnbg,
                      paddingVertical: 8,
                      paddingHorizontal: 20,
                      alignSelf: 'center',
                      borderRadius: 10,
                      marginTop: 10,
                    }}>
                    <Text
                      style={[
                        globalStyle.b12,
                        {color: theme.txt, marginRight: 10},
                      ]}>
                      85.0{' '}
                    </Text>
                    <Icon name="arrow-forward" size={20} color={theme.txt} />
                  </View>
                </View>
                <View
                  style={{
                    width: width / 2.5,
                    backgroundColor: theme.back,
                    paddingVertical: 15,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    marginTop: 10,
                  }}>
                  <Image
                    source={theme.a15}
                    resizeMode="stretch"
                    style={{height: height / 18, width: width / 8}}
                  />
                  <Text
                    style={[
                      globalStyle.b12,
                      {color: theme.disable, marginTop: 7},
                    ]}>
                    REQUEST
                  </Text>
                  <Text
                    style={[globalStyle.b18, {color: theme.txt, marginTop: 2}]}>
                    01
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: theme.btnbg,
                      paddingVertical: 8,
                      paddingHorizontal: 20,
                      alignSelf: 'center',
                      borderRadius: 10,
                      marginTop: 10,
                    }}>
                    <Text
                      style={[
                        globalStyle.b12,
                        {color: theme.txt, marginRight: 10},
                      ]}>
                      85.0{' '}
                    </Text>
                    <Icon name="arrow-forward" size={20} color={theme.txt} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Dash;
