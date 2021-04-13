import React from 'react';
import {StyleSheet, Text} from 'react-native';

const CustomText = props => {
  return (
    <Text style={{...styles.container, ...props.style}}>{props.children}</Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
  },
});
