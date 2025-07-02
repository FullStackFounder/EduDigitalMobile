/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, View, Text, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-paper';

import {Colors} from '../../../../components/theme/color';
import globalStyle from '../../../../components/theme/globalStyle';
import style from './style';

import {useSelector} from 'react-redux';

import PropTypes from 'prop-types';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const PaymentMethodItem = props => {
  const {theme} = useSelector(state => state.theme);

  const {
    paymentmethodType,
    selectedPaymentMethodType,
    paymentMethod,
    selectedPaymentMethodId,
    onPress,
  } = props;

  let icon = {uri: 'https://appso.id/images/payments/bank.png'};
  if (paymentmethodType !== 1) {
    icon = {uri: paymentMethod.icon};
  }

  return (
    <TouchableOpacity
      onPress={() => onPress(paymentmethodType, paymentMethod.id)}>
      <View
        style={[
          style.rowContainer,
          paymentmethodType === selectedPaymentMethodType &&
            paymentMethod.id === selectedPaymentMethodId &&
            style.rowContainerSelected,
        ]}>
        {[1, 4].includes(paymentmethodType) ? (
          <Avatar.Image
            source={icon}
            style={[
              style.bgImage,
              paymentmethodType === selectedPaymentMethodType &&
                paymentMethod.id === selectedPaymentMethodId &&
                style.bgImageSelected,
            ]}
            size={22}
          />
        ) : (
          <Image
            source={icon}
            resizeMode="stretch"
            style={{
              height: height / 30,
              width: width / 8,
              alignSelf: 'center',
            }}
          />
        )}
        {[1, 4].includes(paymentmethodType) && (
          <View style={style.bankNameContainer}>
            <Text style={[globalStyle.m14]}>
              {paymentMethod.name.replace('BANK', '')}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

PaymentMethodItem.default = {
  onPress: () => {},
};

PaymentMethodItem.propTypes = {
  paymentMethod: PropTypes.object.isRequired,
  selectedPaymentMethodId: PropTypes.number,
  onPress: PropTypes.func,
};

export default PaymentMethodItem;
