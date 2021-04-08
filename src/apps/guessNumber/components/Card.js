import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../constants';

const Card = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 20,
  },
});
