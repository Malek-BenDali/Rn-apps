import React from 'react';
import {StyleSheet, Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../guessNumber/constants';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
    />
  );
};

export default CustomHeaderButton;

const styles = StyleSheet.create({});
