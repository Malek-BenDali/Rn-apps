import React from 'react';
import {StyleSheet, Text} from 'react-native';

const OpenSansText = props => {
  return (
    <Text {...props} style={{...styles.container, ...props.style}}>
      {props.children}
    </Text>
  );
};

export default OpenSansText;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'OpenSans-Regular',
  },
});
