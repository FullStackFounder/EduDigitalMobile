import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import LoadingStack from '../../../../components/LoadingStack/LoadingStack';

import SelectedStudent from '../../../../components/SelectedStudent/SelectedStudent';
import AcademicYearOption from '../../../../components/AcademicYearOption/AcademicYearOption';
import StudentBillItem from './StudentBillItem';

import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

import {realmDB} from '../../../../data/db';
import {getStudentBillsByAcademicYear} from '../../../../data/api/studentBillsReq';
import {getPermissions} from '../../../../utils/acl';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const StudentBills = () => {
  const {theme} = useSelector(state => state.theme);
  const {selectedStudentId} = useSelector(state => state.student);
  const [permissions, setPermissions] = useState([]);
  const [selectedAcademicYearID, setAcademicYearID] = useState(0);
  const [academicYears, setAcademicYears] = useState([]);
  const [academicYearTitle, setAcademicYearTitle] = useState('Tahun Ajaran');
  const [studentBills, setStudentBills] = useState([]);
  const [emptyState, setEmptyState] = useState(
    'Pilih tahun ajaran untuk menampilkan data tagihan sekolah',
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const acl = getPermissions(selectedStudentId);
    setPermissions(acl);
  }, [selectedStudentId]);

  useEffect(() => {
    const data = realmDB.students
      .getAllStudentClasses()
      .filter(e => e.student_id === selectedStudentId);

    setAcademicYears(data);
  }, [selectedStudentId]);

  const handleSelectAcademicYear = async value => {
    const data = realmDB.students.getAllStudentClasses();
    const findAcademicYear = data.find(e => e.academic_year_id === value);

    setAcademicYearID(value);
    setAcademicYearTitle(
      `${findAcademicYear.academic_year} - ${findAcademicYear.class_name}`,
    );
  };

  const handleFetchStudentBillsByAcademicYear = async () => {
    setLoading(true);
    const result = await getStudentBillsByAcademicYear(
      selectedStudentId,
      selectedAcademicYearID,
    );

    if (!result.success) {
      setEmptyState('Data tidak ditemukan');
    } else {
      setStudentBills(result.success && result.studentBills);
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <SelectedStudent />
      {!permissions.find(e => e.feature_id === 9) && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: theme.back,
              padding: 20,
              borderRadius: 15,
              marginTop: 15,
            }}>
            <Image
              source={theme.unauthorized}
              style={{
                width: width / 1,
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
              Anda tidak memiliki akses untuk fitur ini.
            </Text>
          </View>
        </ScrollView>
      )}
      {permissions.find(e => e.feature_id === 9) && (
        <View
          style={[style.studentBillContainer, {backgroundColor: theme.back}]}>
          <Icons name="clock-outline" size={20} color={theme.txt} />
          <Text
            style={[
              globalStyle.m12,
              style.academicYearText,
              {color: theme.txt},
            ]}>
            {academicYearTitle}
          </Text>
          <TouchableOpacity
            onPress={() => this.RBSheetAcademicYearStudentBills.open()}>
            <RBSheet
              ref={ref => {
                this.RBSheetAcademicYearStudentBills = ref;
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
                style={[
                  {ackgroundColor: theme.b},
                  style.academicYearContainer,
                ]}>
                <AppBar
                  style={[{backgroundColor: theme.b}, style.academicYearAppBar]}
                  elevation={0}
                  centerTitle={true}
                  title="Tahun Ajaran"
                  titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
                  leading={
                    <TouchableOpacity
                      onPress={() =>
                        this.RBSheetAcademicYearStudentBills.close()
                      }>
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
                      onPress={() =>
                        this.RBSheetAcademicYearStudentBills.close()
                      }>
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
                    style.academicYearSearchContainer,
                    {borderColor: theme.input, backgroundColor: theme.input},
                  ]}>
                  <Icon name="search" size={20} color={theme.txt} />
                  <TextInput
                    placeholder="Cari ..."
                    placeholderTextColor={theme.disable}
                    selectionColor={theme.txt}
                    style={[
                      globalStyle.r12,
                      {color: theme.txt},
                      style.textInputSearch,
                    ]}
                    onChangeText={value => {
                      setTimeout(() => {
                        const data = realmDB.students.getAllStudentClasses();
                        const filterAcademicYear = data.filter(
                          e =>
                            e.academic_year.toLowerCase().includes(value) &&
                            e.student_id === selectedStudentId,
                        );

                        setAcademicYears(filterAcademicYear);
                      }, 1000);
                    }}
                  />
                  <Icon name="close" size={20} color={theme.disable} />
                </View>

                <FlatList
                  onEndReachedThreshold={0.5}
                  showsVerticalScrollIndicator={false}
                  data={academicYears}
                  renderItem={({item: academicYear, index}) => {
                    return (
                      <View key={index}>
                        <AcademicYearOption
                          selectedAcademicYearID={selectedAcademicYearID}
                          academicYear={academicYear}
                          onPress={handleSelectAcademicYear}
                        />
                      </View>
                    );
                  }}
                />
              </View>
              <View style={style.filterButtonContainer}>
                <TouchableOpacity
                  onPress={async () => {
                    if (selectedAcademicYearID) {
                      setStudentBills([]);
                      this.RBSheetAcademicYearStudentBills.close();
                      await handleFetchStudentBillsByAcademicYear();
                    }
                  }}
                  style={[
                    globalStyle.btn,
                    {width: width - 40},
                    selectedAcademicYearID === 0 && globalStyle.disableButton,
                  ]}>
                  <Text style={[globalStyle.btntxt, {}]}>Tampilkan</Text>
                </TouchableOpacity>
              </View>
            </RBSheet>
            <Icons name="chevron-down" size={20} color={theme.txt} />
          </TouchableOpacity>
        </View>
      )}

      {permissions.find(e => e.feature_id === 9) && (
        <View style={{maxHeight: height * 0.5}}>
          <FlatList
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            data={studentBills}
            renderItem={({item: studentBill, index}) => {
              return (
                <View key={index}>
                  <StudentBillItem studentBill={studentBill} />
                </View>
              );
            }}
            ListEmptyComponent={
              loading ? (
                <View style={{height: height * 0.5}}>
                  <LoadingStack />
                </View>
              ) : (
                <View
                  style={{
                    backgroundColor: theme.back,
                    padding: 20,
                    borderRadius: 15,
                    marginTop: 15,
                    height: height * 0.5,
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={theme.emptystate}
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
                    Tagihan Sekolah
                  </Text>
                  <Text
                    style={[
                      globalStyle.r14,
                      {color: theme.disable, textAlign: 'center', marginTop: 5},
                    ]}>
                    {emptyState}
                  </Text>
                </View>
              )
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default StudentBills;
