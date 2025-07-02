/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

import StudentRow from './StudentRow';
import UserAvatar from '../../../components/UserAvatar/UserAvatar';

import {useSelector, useDispatch} from 'react-redux';
import {selectStudentId} from '../../../data/redux/reducers/Student';
import {realmDB} from '../../../data/db';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Students = () => {
  const {theme} = useSelector(state => state.theme);
  const {selectedStudentId} = useSelector(state => state.student);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [students, setStudents] = useState([]);

  const handleSelectStudent = value => {
    dispatch(selectStudentId(value));
  };

  useEffect(() => {
    const data = realmDB.students.getAllStudents();
    setStudents(data);
    if (!selectedStudentId && data.length) {
      dispatch(selectStudentId(data[0].student_id));
    }
  }, [dispatch, selectedStudentId]);

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
              Dasbor
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.Notification)}>
              <Image
                source={theme.a5}
                style={{
                  width: width / 11,
                  height: height / 25,
                  marginHorizontal: 15,
                }}
                resizeMode="stretch"
              />
            </TouchableOpacity>
            <UserAvatar />
          </View>

          <View style={{marginTop: 30}}>
            <View
              style={[
                globalStyle.txtinput,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: theme.back,
                  height: 55,
                  marginTop: 10,
                },
              ]}>
              <Icon name="search" color={theme.txt} size={20} />
              <TextInput
                placeholder="Cari ..."
                selectionColor={Colors.primary}
                placeholderTextColor={Colors.disable}
                style={[
                  globalStyle.m16,
                  {color: theme.txt, flex: 1, marginLeft: 5},
                ]}
                onChangeText={value => {
                  setTimeout(() => {
                    const data = realmDB.students.getAllStudents();
                    const filterStudent = data.filter(e =>
                      e.student_name.toLowerCase().includes(value),
                    );

                    setStudents(filterStudent);
                  }, 1000);
                }}
              />
            </View>

            <FlatList
              onEndReachedThreshold={0.5}
              showsVerticalScrollIndicator={false}
              data={students}
              renderItem={({item: student, index}) => {
                return (
                  <View key={student.student_id}>
                    <StudentRow
                      student={student}
                      selectedStudent={selectedStudentId}
                      onPress={handleSelectStudent}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Students;
