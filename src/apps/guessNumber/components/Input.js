import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {colors} from '../constants';

const Input = props => {
  return <TextInput {...props} style={{...styles.container, ...props.style}} />;
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
  },
});
