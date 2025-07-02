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
  Platform,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, RadioButton} from 'react-native-paper';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';

import {useSelector, useDispatch} from 'react-redux';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Task = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('');

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {paddingTop: 20}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icons name="file-document" size={27} color={theme.txt} />
          <Text
            style={[
              globalStyle.subtitle,
              {color: theme.txt, flex: 1, marginLeft: 10},
            ]}>
            Tasks
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

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: 20}}
            nestedScrollEnabled={true}>
            <View
              style={{
                backgroundColor: theme.back,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 20,
              }}>
              <Icon name="grid-outline" size={20} color={theme.txt} />
              <Text
                style={[globalStyle.b16, {color: theme.txt, marginLeft: 10}]}>
                All
              </Text>
            </View>
            <View style={{margin: 5}} />
            <View
              style={{
                backgroundColor: Colors.primary,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 20,
              }}>
              <Image
                source={require('../../../../assets/images/a20.png')}
                style={{height: height / 40, width: width / 20}}
                resizeMode="stretch"
              />
              <Text
                style={[
                  globalStyle.b16,
                  {color: Colors.secondary, marginLeft: 10},
                ]}>
                Math
              </Text>
            </View>
            <View style={{margin: 5}} />
            <View
              style={{
                backgroundColor: theme.back,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 20,
              }}>
              <Icons name="flask-empty-outline" size={20} color={theme.txt} />
              <Text
                style={[globalStyle.b16, {color: theme.txt, marginLeft: 10}]}>
                Chemistry
              </Text>
            </View>
            <View style={{margin: 5}} />
            <View
              style={{
                backgroundColor: theme.back,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 6,
                paddingHorizontal: 15,
                borderRadius: 20,
              }}>
              <Icon name="pencil-sharp" size={20} color={theme.txt} />
              <Text
                style={[globalStyle.b16, {color: theme.txt, marginLeft: 10}]}>
                Literature
              </Text>
            </View>
          </ScrollView>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: Platform.OS === 'ios' ? height : height / 1.12,
          }}>
          <View
            style={{
              backgroundColor: theme.back,
              paddingVertical: 15,
              paddingHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 15,
              borderTopLeftRadius: 15,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              marginTop: 20,
            }}>
            <Icons name="clock-outline" size={20} color={theme.txt} />
            <Text
              style={[
                globalStyle.m12,
                {color: theme.txt, flex: 1, marginLeft: 10},
              ]}>
              Recents
            </Text>
            <TouchableOpacity onPress={() => this.RBSheet4.open()}>
              <RBSheet
                ref={ref => {
                  this.RBSheet4 = ref;
                }}
                height={350}
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
                  }}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    nestedScrollEnabled={true}>
                    <AppBar
                      style={{backgroundColor: theme.b, marginTop: 10}}
                      elevation={0}
                      centerTitle={true}
                      title="Filter"
                      titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
                      leading={<Text />}
                      trailing={
                        <TouchableOpacity onPress={() => this.RBSheet4.close()}>
                          <Avatar.Icon
                            icon="close-circle-outline"
                            style={{backgroundColor: theme.btnbg}}
                            color={theme.txt}
                            size={30}
                          />
                        </TouchableOpacity>
                      }
                    />
                    <TouchableOpacity onPress={() => this.RBSheet5.open()}>
                      <RBSheet
                        ref={ref => {
                          this.RBSheet5 = ref;
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
                            marginTop: 10,
                          }}>
                          <ScrollView
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}>
                            <AppBar
                              style={{
                                backgroundColor: theme.b,
                                marginTop: 10,
                              }}
                              elevation={0}
                              centerTitle={true}
                              title="Test Time"
                              titleStyle={[
                                globalStyle.subtitle,
                                {color: theme.txt},
                              ]}
                              leading={
                                <TouchableOpacity
                                  onPress={() => this.RBSheet5.close()}>
                                  <Avatar.Icon
                                    icon="chevron-left"
                                    style={{backgroundColor: theme.icon}}
                                    color={theme.txt}
                                    size={45}
                                  />
                                </TouchableOpacity>
                              }
                              trailing={
                                <TouchableOpacity
                                  onPress={() => this.RBSheet5.close()}>
                                  <Avatar.Icon
                                    icon="close-circle-outline"
                                    style={{backgroundColor: theme.btnbg}}
                                    color={theme.txt}
                                    size={30}
                                  />
                                </TouchableOpacity>
                              }
                            />
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 20,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                All
                              </Text>
                              <RadioButton
                                value="first"
                                status={
                                  checked === 'first' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('first')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                15 minutes
                              </Text>
                              <RadioButton
                                value="second"
                                status={
                                  checked === 'second' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('second')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                45 minutes
                              </Text>
                              <RadioButton
                                value="third"
                                status={
                                  checked === 'third' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('third')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                60 minutes
                              </Text>
                              <RadioButton
                                value="fourth"
                                status={
                                  checked === 'fourth' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('fourth')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                                marginBottom: 20,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                120 minutes
                              </Text>
                              <RadioButton
                                value="fifth"
                                status={
                                  checked === 'fifth' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('fifth')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                          </ScrollView>
                          <TouchableOpacity
                            onPress={() => this.RBSheet5.close()}
                            style={[
                              globalStyle.btn,
                              {
                                backgroundColor: Colors.primary,
                                marginVertical: 20,
                                position: 'absolute',
                                bottom: -20,
                                width: width / 3,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                            ]}>
                            <Icon
                              name="arrow-down-circle-outline"
                              size={20}
                              color={Colors.secondary}
                              style={{marginRight: 5}}
                            />
                            <Text
                              style={[
                                globalStyle.btntxt,
                                {color: Colors.secondary},
                              ]}>
                              More
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </RBSheet>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: 12,
                          backgroundColor: theme.back,
                          borderRadius: 10,
                          marginTop: 20,
                          justifyContent: 'space-between',
                          paddingVertical: 15,
                        }}>
                        <Text style={[globalStyle.b14, {color: theme.txt}]}>
                          Test Time
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={[globalStyle.r14, {color: theme.txt}]}>
                            60 minutes
                          </Text>
                          <Icons
                            name="chevron-right"
                            size={20}
                            color={theme.txt}
                            style={{marginLeft: 5}}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.RBSheet6.open()}>
                      <RBSheet
                        ref={ref => {
                          this.RBSheet6 = ref;
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
                            marginTop: 10,
                          }}>
                          <ScrollView
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}>
                            <AppBar
                              style={{
                                backgroundColor: theme.b,
                                marginTop: 10,
                              }}
                              elevation={0}
                              centerTitle={true}
                              title="Grade"
                              titleStyle={[
                                globalStyle.subtitle,
                                {color: theme.txt},
                              ]}
                              leading={
                                <TouchableOpacity
                                  onPress={() => this.RBSheet6.close()}>
                                  <Avatar.Icon
                                    icon="chevron-left"
                                    style={{backgroundColor: theme.icon}}
                                    color={theme.txt}
                                    size={45}
                                  />
                                </TouchableOpacity>
                              }
                              trailing={
                                <TouchableOpacity
                                  onPress={() => this.RBSheet6.close()}>
                                  <Avatar.Icon
                                    icon="close-circle-outline"
                                    style={{backgroundColor: theme.btnbg}}
                                    color={theme.txt}
                                    size={30}
                                  />
                                </TouchableOpacity>
                              }
                            />
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 20,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                5th Grade
                              </Text>
                              <RadioButton
                                value="first"
                                status={
                                  checked === 'first' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('first')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                6th Grade
                              </Text>
                              <RadioButton
                                value="second"
                                status={
                                  checked === 'second' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('second')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                7th Grade
                              </Text>
                              <RadioButton
                                value="third"
                                status={
                                  checked === 'third' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('third')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                8th Grade
                              </Text>
                              <RadioButton
                                value="fourth"
                                status={
                                  checked === 'fourth' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('fourth')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                                marginBottom: 20,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                9th Grade
                              </Text>
                              <RadioButton
                                value="fifth"
                                status={
                                  checked === 'fifth' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('fifth')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                          </ScrollView>
                          <TouchableOpacity
                            onPress={() => this.RBSheet6.close()}
                            style={[
                              globalStyle.btn,
                              {
                                backgroundColor: Colors.primary,
                                marginVertical: 20,
                                position: 'absolute',
                                bottom: -10,
                                width: width / 3,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                            ]}>
                            <Icon
                              name="arrow-down-circle-outline"
                              size={20}
                              color={Colors.secondary}
                              style={{marginRight: 5}}
                            />
                            <Text
                              style={[
                                globalStyle.btntxt,
                                {color: Colors.secondary},
                              ]}>
                              More
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </RBSheet>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: 12,
                          backgroundColor: theme.back,
                          borderRadius: 10,
                          marginTop: 5,
                          justifyContent: 'space-between',
                          paddingVertical: 15,
                        }}>
                        <Text style={[globalStyle.b14, {color: theme.txt}]}>
                          Grade
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={[globalStyle.r14, {color: theme.txt}]}>
                            6th Grade
                          </Text>
                          <Icons
                            name="chevron-right"
                            size={20}
                            color={theme.txt}
                            style={{marginLeft: 5}}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.RBSheet7.open()}>
                      <RBSheet
                        ref={ref => {
                          this.RBSheet7 = ref;
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
                            marginTop: 10,
                          }}>
                          <ScrollView
                            showsVerticalScrollIndicator={false}
                            nestedScrollEnabled={true}>
                            <AppBar
                              style={{
                                backgroundColor: theme.b,
                                marginTop: 10,
                              }}
                              elevation={0}
                              centerTitle={true}
                              title="Subject"
                              titleStyle={[
                                globalStyle.subtitle,
                                {color: theme.txt},
                              ]}
                              leading={
                                <TouchableOpacity
                                  onPress={() => this.RBSheet7.close()}>
                                  <Avatar.Icon
                                    icon="chevron-left"
                                    style={{backgroundColor: theme.icon}}
                                    color={theme.txt}
                                    size={45}
                                  />
                                </TouchableOpacity>
                              }
                              trailing={
                                <TouchableOpacity
                                  onPress={() => this.RBSheet7.close()}>
                                  <Avatar.Icon
                                    icon="close-circle-outline"
                                    style={{backgroundColor: theme.btnbg}}
                                    color={theme.txt}
                                    size={30}
                                  />
                                </TouchableOpacity>
                              }
                            />
                            <View
                              style={[
                                globalStyle.inputContainer,
                                {
                                  borderRadius: 25,
                                  borderColor: theme.input,
                                  backgroundColor: theme.input,
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                },
                              ]}>
                              <Icon name="search" size={20} color={theme.txt} />
                              <TextInput
                                placeholder="search"
                                placeholderTextColor={theme.disable}
                                selectionColor={theme.txt}
                                style={[
                                  globalStyle.r12,
                                  {
                                    color: theme.txt,
                                    flex: 1,
                                    marginLeft: 10,
                                  },
                                ]}
                              />
                              <Icon
                                name="close"
                                size={20}
                                color={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 20,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                All
                              </Text>
                              <RadioButton
                                value="first"
                                status={
                                  checked === 'first' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('first')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                Math
                              </Text>
                              <RadioButton
                                value="second"
                                status={
                                  checked === 'second' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('second')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                Chemistry
                              </Text>
                              <RadioButton
                                value="third"
                                status={
                                  checked === 'third' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('third')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 12,
                                backgroundColor: theme.back,
                                borderRadius: 10,
                                marginTop: 5,
                                justifyContent: 'space-between',
                                paddingVertical: 15,
                                marginBottom: 60,
                              }}>
                              <Text
                                style={[globalStyle.b14, {color: theme.txt}]}>
                                Literature
                              </Text>
                              <RadioButton
                                value="fourth"
                                status={
                                  checked === 'fourth' ? 'checked' : 'unchecked'
                                }
                                onPress={() => setChecked('fourth')}
                                color={Colors.primary}
                                uncheckedColor={theme.disable}
                              />
                            </View>
                          </ScrollView>
                          <TouchableOpacity
                            onPress={() => this.RBSheet7.close()}
                            style={[
                              globalStyle.btn,
                              {
                                backgroundColor: Colors.primary,
                                marginVertical: 20,
                                position: 'absolute',
                                bottom: 30,
                                width: width / 3,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                            ]}>
                            <Icon
                              name="arrow-down-circle-outline"
                              size={20}
                              color={Colors.secondary}
                              style={{marginRight: 5}}
                            />
                            <Text
                              style={[
                                globalStyle.btntxt,
                                {color: Colors.secondary},
                              ]}>
                              More
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </RBSheet>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          paddingHorizontal: 12,
                          backgroundColor: theme.back,
                          borderRadius: 10,
                          marginTop: 5,
                          justifyContent: 'space-between',
                          paddingVertical: 15,
                        }}>
                        <Text style={[globalStyle.b14, {color: theme.txt}]}>
                          Subject
                        </Text>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text
                            style={[globalStyle.r14, {color: theme.disable}]}>
                            Select
                          </Text>
                          <Icons
                            name="chevron-right"
                            size={20}
                            color={theme.txt}
                            style={{marginLeft: 5}}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.RBSheet4.close()}
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
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </RBSheet>
              <Icons name="chevron-down" size={20} color={theme.txt} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              backgroundColor: theme.back,
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginTop: 10,
              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskDetil')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image
                  source={theme.a17}
                  resizeMode="stretch"
                  style={{height: height / 18, width: width / 8}}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[globalStyle.b16, {color: theme.txt}]}>
                      Statistics
                    </Text>
                    <Image
                      source={require('../../../../assets/images/p1.png')}
                      style={{
                        height: height / 30,
                        width: width / 14,
                        resizeMode: 'stretch',
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 3,
                    }}>
                    <Avatar.Image
                      source={require('../../../../assets/images/d3.png')}
                      style={{backgroundColor: theme.bg}}
                      size={20}
                    />
                    <Text
                      style={[
                        globalStyle.m12,
                        {color: theme.disable, marginLeft: 10},
                      ]}>
                      Mr. Chaunarois Santo
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={[
                globalStyle.divider,
                {backgroundColor: theme.border, marginVertical: 15},
              ]}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name="clock-outline" size={20} color={theme.disable} />
              <Text
                style={[
                  globalStyle.m12,
                  {color: theme.disable, marginLeft: 10, flex: 1},
                ]}>
                20/12/2021
              </Text>
              <Icons name="clock-outline" size={20} color={theme.disable} />
              <Text
                style={[
                  globalStyle.m12,
                  {color: theme.disable, marginLeft: 10, marginRight: 20},
                ]}>
                20
              </Text>
              <Icons name="clock-outline" size={20} color={theme.disable} />
              <Text
                style={[
                  globalStyle.m12,
                  {color: theme.disable, marginLeft: 10},
                ]}>
                12
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('TaskDetil')}>
            <View
              style={{
                backgroundColor: theme.back,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginTop: 10,
                borderRadius: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../../assets/images/a17.png')}
                  resizeMode="stretch"
                  style={{height: height / 18, width: width / 8}}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[globalStyle.b16, {color: theme.txt}]}>
                      Negative numbers
                    </Text>
                    <Image
                      source={require('../../../../assets/images/p2.png')}
                      style={{
                        height: height / 30,
                        width: width / 14,
                        resizeMode: 'stretch',
                        tintColor: theme.txt,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 3,
                    }}>
                    <Avatar.Image
                      source={require('../../../../assets/images/d3.png')}
                      style={{backgroundColor: theme.bg}}
                      size={20}
                    />
                    <Text
                      style={[
                        globalStyle.m12,
                        {color: theme.disable, marginLeft: 10},
                      ]}>
                      Ms. Verra Mussies
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  globalStyle.divider,
                  {backgroundColor: theme.border, marginVertical: 15},
                ]}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons name="clock-outline" size={20} color={theme.disable} />
                <Text
                  style={[
                    globalStyle.m12,
                    {color: theme.disable, marginLeft: 10, flex: 1},
                  ]}>
                  20/12/2021
                </Text>
                <Icons name="clock-outline" size={20} color={theme.disable} />
                <Text
                  style={[
                    globalStyle.m12,
                    {
                      color: theme.disable,
                      marginLeft: 10,
                      marginRight: 20,
                    },
                  ]}>
                  20
                </Text>
                <Icons name="clock-outline" size={20} color={theme.disable} />
                <Text
                  style={[
                    globalStyle.m12,
                    {color: theme.disable, marginLeft: 10},
                  ]}>
                  12
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('TaskDetil')}>
            <View
              style={{
                backgroundColor: theme.back,
                paddingVertical: 10,
                paddingHorizontal: 15,
                marginTop: 10,
                borderRadius: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Image
                  source={require('../../../../assets/images/a17.png')}
                  resizeMode="stretch"
                  style={{height: height / 18, width: width / 8}}
                />
                <View style={{marginLeft: 10, flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={[globalStyle.b16, {color: theme.txt}]}>
                      Geometry
                    </Text>
                    <Image
                      source={require('../../../../assets/images/p2.png')}
                      style={{
                        height: height / 30,
                        width: width / 14,
                        resizeMode: 'stretch',
                        tintColor: theme.txt,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 3,
                    }}>
                    <Avatar.Image
                      source={require('../../../../assets/images/d3.png')}
                      style={{backgroundColor: theme.bg}}
                      size={20}
                    />
                    <Text
                      style={[
                        globalStyle.m12,
                        {color: theme.disable, marginLeft: 10},
                      ]}>
                      Ms. Verra Mussies
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  globalStyle.divider,
                  {backgroundColor: theme.border, marginVertical: 15},
                ]}
              />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icons name="clock-outline" size={20} color={theme.disable} />
                <Text
                  style={[
                    globalStyle.m12,
                    {color: theme.disable, marginLeft: 10, flex: 1},
                  ]}>
                  20/12/2021
                </Text>
                <Icons name="clock-outline" size={20} color={theme.disable} />
                <Text
                  style={[
                    globalStyle.m12,
                    {
                      color: theme.disable,
                      marginLeft: 10,
                      marginRight: 20,
                    },
                  ]}>
                  20
                </Text>
                <Icons name="clock-outline" size={20} color={theme.disable} />
                <Text
                  style={[
                    globalStyle.m12,
                    {color: theme.disable, marginLeft: 10},
                  ]}>
                  12
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: theme.back,
              paddingVertical: 13,
              paddingHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              marginTop: 5,
            }}>
            <Icon name="star" size={18} color={'#FFB800'} />
            <Text
              style={[
                globalStyle.m12,
                {color: theme.txt, flex: 1, marginLeft: 10},
              ]}>
              News
            </Text>
            <Icons name="chevron-up" size={20} color={theme.txt} />
          </View>

          <View
            style={{
              backgroundColor: theme.back,
              paddingVertical: 13,
              paddingHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              marginTop: 5,
            }}>
            <Icon name="checkmark-circle" size={20} color={'#36D362'} />
            <Text
              style={[
                globalStyle.m12,
                {color: theme.txt, flex: 1, marginLeft: 10},
              ]}>
              Completed
            </Text>
            <Icons name="chevron-up" size={20} color={theme.txt} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Task;
