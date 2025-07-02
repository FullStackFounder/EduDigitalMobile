/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import globalStyle from '../../../components/theme/globalStyle';
import {Avatar} from 'react-native-paper';
import {AppBar} from '@react-native-material/core';
import RenderHtml from 'react-native-render-html';
import {Routes} from '../../../navigation/Routes';

import {useSelector} from 'react-redux';
import {getNotification} from '../../../data/api/notificationsReq';

import {formatDistance} from 'date-fns';
import {id as indonesia} from 'date-fns/locale';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const NotificationDetails = ({route, navigation}) => {
  const {theme} = useSelector(state => state.theme);
  const {id: notificationID} = route.params;
  const [notification, setNotification] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNotification() {
      setLoading(true);
      const result = await getNotification(notificationID);
      if (!result.success) {
        setError(result.message);
      } else {
        setNotification(result.notification);
      }
      setLoading(false);
    }

    fetchNotification();
  }, [notificationID]);

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

        <View
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
                {notification?.created_at
                  ? formatDistance(notification?.created_at, new Date(), {
                      addSuffix: true,
                      locale: indonesia,
                    })
                  : ''}
              </Text>
              <Text style={[globalStyle.b14, {color: theme.txt, marginTop: 5}]}>
                {notification?.title}
              </Text>
            </View>
          </View>
          {!loading && (
            <View style={{marginHorizontal: 10}}>
              <RenderHtml
                contentWidth={width}
                source={{
                  html: notification?.content,
                }}
              />
            </View>
          )}
          {notification?.payment && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: 0,
                marginTop: 20,
              }}>
              <TouchableOpacity
                style={[globalStyle.btn, {width: width - 60}]}
                onPress={() =>
                  navigation.navigate(Routes.ViewTransaction, {
                    transaction: notification.transaction,
                  })
                }>
                <Text style={[globalStyle.btntxt, {}]}>Detail Pembayaran</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationDetails;
