import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {colors} from '../constants';

const PrimaryButton = props => {
  return (
    <TouchableOpacity {...props} style={{...styles.container, ...props.style}}>
      <Text style={styles.buttonText}> {props.text} </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 80,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
});
