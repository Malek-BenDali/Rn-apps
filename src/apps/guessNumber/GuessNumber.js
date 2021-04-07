import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './components';
import StartGame from './screens/StarGame';

const GuessNumber = () => {
  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      <StartGame />
    </View>
  );
};

export default GuessNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
