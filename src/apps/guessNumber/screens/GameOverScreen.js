import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';

const GameOverScreen = ({guessRounds, userNumber, configerNewGame}) => {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
      <Text style={styles.rounds}>Number of rounds : {guessRounds} </Text>
      <Text>Number Was : {userNumber} </Text>
      <PrimaryButton
        text="Play again"
        style={{width: 100}}
        onPress={() => configerNewGame()}
      />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounds: {
    fontFamily: 'OpenSans-Bold',
    // fontWeight: 'bold',
  },
});
