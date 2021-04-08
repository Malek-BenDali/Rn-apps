import React from 'react';
import {StyleSheet, Text} from 'react-native';

const OpenSansText = props => {
  return (
    <Text {...props} style={{...styles.container, ...props.style}}>
      {props.children}
    </Text>
  );
};

const OpenSansBoldText = props => {
  return (
    <Text {...props} style={{...styles.bold, ...props.style}}>
      {props.children}
    </Text>
  );
};

export {OpenSansText, OpenSansBoldText};

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
});
