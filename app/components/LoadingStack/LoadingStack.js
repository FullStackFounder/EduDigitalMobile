import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import style from './style';

const LoadingStack = () => (
  <View style={[style.container, style.horizontal]}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default LoadingStack;
