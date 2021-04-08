import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton, OpenSansText} from '../components';

const GameOverScreen = ({guessRounds, userNumber, configerNewGame}) => {
  return (
    <View style={styles.screen}>
      <OpenSansText>Game is over</OpenSansText>
      <OpenSansText>Number of rounds : {guessRounds} </OpenSansText>
      <OpenSansText>Number Was : {userNumber} </OpenSansText>
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
});
