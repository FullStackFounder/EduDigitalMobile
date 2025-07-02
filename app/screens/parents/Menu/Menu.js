/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {AppBar} from '@react-native-material/core';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from '../../../components/UserAvatar/UserAvatar';

import globalStyle from '../../../components/theme/globalStyle';
import {verticalScale} from '../../../../assets/styles/scaling';

import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

import {useSelector} from 'react-redux';
import {logOutUser} from '../../../data/api/auth';
import {realmDB} from '../../../data/db';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Menu = () => {
  const {theme} = useSelector(state => state.theme);
  const {user} = useSelector(state => state.user);
  const {selectedStudentId} = useSelector(state => state.student);
  const navigation = useNavigation();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    const selectedStudent = realmDB.students
      .getAllStudents()
      .find(e => e.student_id === selectedStudentId);

    setStudent(selectedStudent);
  }, [selectedStudentId]);

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {paddingTop: 30}]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <UserAvatar />
          <Text
            style={[
              globalStyle.subtitle,
              {color: theme.txt, marginLeft: 10, flex: 1},
            ]}>
            {user.username}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            height: Platform.OS === 'ios' ? height * 1.1 : height / 1.07,
          }}>
          <View style={{marginTop: verticalScale(20)}} />

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Settings)}>
            <View
              style={{
                backgroundColor: theme.back,
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                borderRadius: 15,
              }}>
              <Icon name="settings-outline" size={25} color={theme.txt} />
              <View style={{flex: 1, marginLeft: 15}}>
                <Text style={[globalStyle.b14, {color: theme.txt}]}>
                  Pengaturan
                </Text>
                <Text
                  style={[
                    globalStyle.r12,
                    {color: theme.disable, marginTop: 5},
                  ]}>
                  Atur tema, ubah kata sandi, dst
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={theme.txt} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.RBSheetHelp.open()}>
            <RBSheet
              ref={ref => {
                this.RBSheetHelp = ref;
              }}
              height={200}
              openDuration={100}
              customStyles={{
                container: {
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  backgroundColor: theme.b,
                },
              }}>
              <View style={[{backgroundColor: theme.b}]}>
                <AppBar
                  style={[{backgroundColor: theme.b}]}
                  elevation={1}
                  centerTitle={true}
                  title="Admin Sekolah"
                  titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
                  leading={
                    <TouchableOpacity onPress={() => this.RBSheetHelp.close()}>
                      <Avatar.Icon
                        icon="chevron-left"
                        style={{backgroundColor: theme.icon}}
                        color={theme.txt}
                        size={45}
                      />
                    </TouchableOpacity>
                  }
                  trailing={
                    <TouchableOpacity onPress={() => this.RBSheetHelp.close()}>
                      <Avatar.Icon
                        icon="close-circle-outline"
                        style={{backgroundColor: theme.btnbg}}
                        color={theme.txt}
                        size={30}
                      />
                    </TouchableOpacity>
                  }
                />
                <View style={{margin: 20}}>
                  <TouchableOpacity
                    onPress={async () => {
                      const phone = student?.school_phone;
                      const message = `Halo Admin ${student?.school_name},`;
                      await Linking.openURL(
                        `https://api.whatsapp.com/send?phone=${phone}&text=${message}`,
                      );
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 3,
                      marginBottom: 15,
                      marginHorizontal: 20,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Avatar.Image
                        source={theme.whatsapp}
                        style={{backgroundColor: theme.b}}
                        size={22}
                      />
                      <Text
                        style={[
                          globalStyle.b16,
                          {color: theme.txt, marginLeft: 10},
                        ]}>
                        {student?.school_phone}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={async () => {
                      const email = student?.school_email;
                      await Linking.openURL(`mailto:${email}`);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginVertical: 3,
                      marginBottom: 15,
                      marginHorizontal: 20,
                    }}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <Avatar.Image
                        source={theme.email}
                        style={{backgroundColor: theme.b}}
                        size={22}
                      />
                      <Text
                        style={[
                          globalStyle.b16,
                          {color: theme.txt, marginLeft: 10},
                        ]}>
                        {student?.school_email}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </RBSheet>
            <View
              style={{
                backgroundColor: theme.back,
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                borderRadius: 15,
              }}>
              <Icon name="warning-outline" size={25} color={theme.txt} />
              <View style={{flex: 1, marginLeft: 15}}>
                <Text style={[globalStyle.b14, {color: theme.txt}]}>
                  Pusat Bantuan
                </Text>
                <Text
                  style={[
                    globalStyle.r12,
                    {color: theme.disable, marginTop: 5},
                  ]}>
                  Hubungi atau dukungan melalui kontak admin
                </Text>
              </View>
              <Icon name="chevron-forward" size={20} color={theme.txt} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={logOutUser}>
            <View
              style={{
                backgroundColor: theme.back,
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                borderRadius: 15,
              }}>
              <Icon
                name="arrow-forward-circle-outline"
                size={25}
                color={theme.txt}
              />
              <View style={{flex: 1, marginLeft: 15}}>
                <Text style={[globalStyle.b14, {color: theme.txt}]}>
                  Keluar
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

export default Menu;
