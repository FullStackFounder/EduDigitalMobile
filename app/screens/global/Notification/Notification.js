/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Colors} from '../../../components/theme/color';
import globalStyle from '../../../components/theme/globalStyle';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppBar} from '@react-native-material/core';
import LoadingStack from '../../../components/LoadingStack/LoadingStack';

import {useSelector} from 'react-redux';
import {getNotifications} from '../../../data/api/notificationsReq';

import {format, formatDistance, formatRelative} from 'date-fns';
import {id as indonesia} from 'date-fns/locale';
import {Routes} from '../../../navigation/Routes';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Notification = () => {
  const {theme} = useSelector(state => state.theme);
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNotifications() {
      setLoading(true);
      const result = await getNotifications();
      console.log('>> fetchNotifications: ', result);
      if (!result.success) {
        setError(result.message);
      } else {
        setNotifications(result.notifications);
      }
      setLoading(false);
    }

    fetchNotifications();
  }, []);

  return (
    <SafeAreaView style={[globalStyle.area, {backgroundColor: theme.b}]}>
      <View style={[globalStyle.main, {backgroundColor: theme.b}]}>
        <AppBar
          style={{backgroundColor: theme.b, marginTop: 15}}
          elevation={0}
          centerTitle={true}
          title="Pemberitahuan"
          titleStyle={[globalStyle.subtitle, {color: theme.txt}]}
          leading={
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Avatar.Icon
                icon="arrow-left"
                style={{backgroundColor: theme.icon}}
                color={theme.txt}
                size={45}
              />
            </TouchableOpacity>
          }
        />
        <View style={{marginTop: 10}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={false}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: theme.bg,
                borderRadius: 20,
              }}>
              <Icon name="grid-outline" size={15} color={theme.txt} />
              <Text
                style={[globalStyle.b12, {color: theme.txt, marginLeft: 8}]}>
                Semua
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: Colors.primary,
                borderRadius: 20,
                marginLeft: 10,
              }}>
              <Image
                source={require('../../../../assets/images/s26.png')}
                style={{
                  height: height / 40,
                  width: width / 18,
                  resizeMode: 'stretch',
                }}
              />
              <Text
                style={[
                  globalStyle.b12,
                  {color: Colors.secondary, marginLeft: 8},
                ]}>
                Tagihan
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: theme.bg,
                borderRadius: 20,
                marginLeft: 10,
              }}>
              <Icons name="flask-empty-outline" size={15} color={theme.txt} />
              <Text
                style={[globalStyle.b12, {color: theme.txt, marginLeft: 8}]}>
                Akademik
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: theme.bg,
                borderRadius: 20,
                marginLeft: 10,
              }}>
              <Icons name="pencil" size={15} color={theme.txt} />
              <Text
                style={[globalStyle.b12, {color: theme.txt, marginLeft: 8}]}>
                Info Sekolah
              </Text>
            </View>
          </ScrollView>
        </View>

        <FlatList
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: theme.back,
                  borderRadius: 10,
                  marginTop: 15,
                  padding: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={theme.invoice}
                    style={{
                      height: height / 32,
                      width: width / 24,
                    }}
                  />
                  <View style={{marginLeft: 10, flex: 1}}>
                    <Text style={[globalStyle.r12, {color: theme.disable}]}>
                      {formatDistance(item.created_at, new Date(), {
                        addSuffix: true,
                        locale: indonesia,
                      })}
                    </Text>
                    <Text
                      style={[
                        globalStyle.b14,
                        {color: theme.txt, marginTop: 5},
                      ]}>
                      {item.title}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(Routes.NotificationDetails, {
                        id: item.id,
                      })
                    }>
                    <Avatar.Icon
                      icon="arrow-right"
                      style={{backgroundColor: theme.btnbg}}
                      color={theme.txt}
                      size={32}
                    />
                  </TouchableOpacity>
                </View>
                {/* <Text
                  style={[
                    globalStyle.r14,
                    {color: theme.disable, marginTop: 8, marginLeft: 57},
                  ]}>
                  {removeTags(item.content)}.....
                </Text> */}
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
                    globalStyle.r14,
                    {color: theme.disable, textAlign: 'center', marginTop: 5},
                  ]}>
                  Belum ada pemberitahuan
                </Text>
              </View>
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
