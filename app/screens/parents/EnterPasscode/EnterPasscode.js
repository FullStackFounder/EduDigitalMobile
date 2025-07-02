/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {Avatar, RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';

import {useSelector, useDispatch} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const EnterPasscode = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View style={[globalStyle.main, {backgroundColor: theme.b}]}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Image
              source={require('../../../../assets/images/tv.png')}
              style={{
                height: height / 36,
                width: width / 18,
                resizeMode: 'stretch',
                tintColor: theme.txt,
              }}
            />
            <Text
              style={[
                globalStyle.subtitle,
                {color: theme.txt, flex: 1, marginLeft: 10},
              ]}>
              Class
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
              height: Platform.OS === 'ios' ? height * 1.1 : height,
            }}>
            <View
              style={[
                globalStyle.inputContainer,
                {
                  borderRadius: 20,
                  borderColor: theme.bg,
                  backgroundColor: theme.back,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                },
              ]}>
              <Icon name="search" size={20} color={theme.txt} />
              <TextInput
                placeholder="search"
                placeholderTextColor={theme.disable}
                selectionColor={theme.txt}
                style={[
                  globalStyle.r12,
                  {color: theme.txt, flex: 1, marginLeft: 10},
                ]}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons name="filter-variant" size={20} color={theme.disable} />
                <View
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    backgroundColor: Colors.primary,
                    borderRadius: 20,
                    marginLeft: 5,
                  }}>
                  <Text style={[globalStyle.b12, {color: Colors.secondary}]}>
                    + Add
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <RBSheet
                ref={ref => {
                  this.RBSheet10 = ref;
                }}
                height={450}
                openDuration={100}
                customStyles={{
                  container: {
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    backgroundColor: theme.b,
                  },
                }}>
                <View
                  style={{
                    marginHorizontal: 20,
                    backgroundColor: theme.b,
                    marginBottom: 10,
                  }}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}>
                    <Image
                      source={require('../../../../assets/images/s19.png')}
                      style={{
                        height: height / 16,
                        width: width / 7,
                        resizeMode: 'stretch',
                        alignSelf: 'center',
                        marginTop: 15,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 15,
                      }}>
                      <Text style={[globalStyle.subtitle, {color: theme.txt}]}>
                        Chemistry class
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar.Icon
                          icon="information-outline"
                          style={{backgroundColor: theme.btnbg}}
                          color={theme.txt}
                          size={30}
                        />
                        <Avatar.Icon
                          icon="star-outline"
                          style={{
                            backgroundColor: theme.btnbg,
                            marginHorizontal: 5,
                          }}
                          color={theme.txt}
                          size={30}
                        />
                        <Avatar.Icon
                          icon="comment-outline"
                          style={{backgroundColor: theme.btnbg}}
                          color={theme.txt}
                          size={30}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 12,
                        backgroundColor: theme.back,
                        borderRadius: 10,
                        marginTop: 10,
                      }}>
                      <Avatar.Image
                        source={require('../../../../assets/images/s22.png')}
                        size={32}
                        style={{backgroundColor: theme.bg}}
                      />
                      <Text
                        style={[
                          globalStyle.b14,
                          {color: theme.txt, marginLeft: 10, flex: 1},
                        ]}>
                        Students
                      </Text>
                      <Text style={[globalStyle.r14, {color: theme.txt}]}>
                        25 Student
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 12,
                        backgroundColor: theme.back,
                        borderRadius: 10,
                        marginTop: 5,
                      }}>
                      <Avatar.Image
                        source={require('../../../../assets/images/s23.png')}
                        size={32}
                        style={{backgroundColor: theme.bg}}
                      />
                      <Text
                        style={[
                          globalStyle.b14,
                          {color: theme.txt, marginLeft: 10, flex: 1},
                        ]}>
                        Task
                      </Text>
                      <Text style={[globalStyle.r14, {color: theme.txt}]}>
                        31 Task/month
                      </Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: theme.back,
                        borderRadius: 10,
                        marginTop: 10,
                        padding: 15,
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar.Image
                          source={require('../../../../assets/images/d4.png')}
                          style={{backgroundColor: theme.bg}}
                          size={24}
                        />
                        <Text
                          style={[
                            globalStyle.b14,
                            {color: theme.txt, marginLeft: 10},
                          ]}>
                          Samsius
                        </Text>
                        <View
                          style={{
                            backgroundColor: theme.s1,
                            paddingHorizontal: 10,
                            paddingVertical: 2,
                            borderRadius: 5,
                            marginLeft: 10,
                          }}>
                          <Text style={[globalStyle.b10, {color: theme.txt}]}>
                            STUDENT
                          </Text>
                        </View>
                        <View style={{alignItems: 'flex-end', flex: 1}}>
                          <Text
                            style={[globalStyle.r12, {color: theme.disable}]}>
                            26 Mar
                          </Text>
                        </View>
                      </View>
                      <Text
                        style={[
                          globalStyle.r14,
                          {color: theme.txt, marginTop: 8},
                        ]}>
                        Build as my work through the different geometry topics.
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.RBSheet10.close()}
                      style={[
                        globalStyle.btn,
                        {
                          backgroundColor: Colors.primary,
                          marginVertical: 20,
                          width: width - 40,
                        },
                      ]}>
                      <Text
                        style={[globalStyle.btntxt, {color: Colors.secondary}]}>
                        Done
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </RBSheet>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s16.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Math Class
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s17.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Science Practice
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s18.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    History class
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s19.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Chemistry class
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s20.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Geography
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s21.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Literature class
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../../../assets/images/s16.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Math Class
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.RBSheet10.open()}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 12,
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 5,
                  marginBottom: 20,
                }}>
                <Image
                  source={require('../../../../assets/images/s16.png')}
                  style={{
                    height: height / 16,
                    width: width / 7,
                    resizeMode: 'stretch',
                  }}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <Text style={[globalStyle.b16, {color: theme.txt}]}>
                    Math Class
                  </Text>
                  <Text style={[globalStyle.r12, {color: theme.disable}]}>
                    18:20, 22/10/2021
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddClass')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderColor: theme.border,
                    borderWidth: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    borderRadius: 20,
                  }}>
                  <Text style={[globalStyle.b12, {color: theme.txt}]}>
                    Join
                  </Text>
                  <Icon
                    name="arrow-forward-outline"
                    size={15}
                    color={theme.txt}
                    style={{marginLeft: 8}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default EnterPasscode;
