import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from './components';
import {StartGame, GameScreen} from './screens';

const GuessNumber = () => {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = selectedNum => {
    setUserNumber(selectedNum);
  };

  let content = <StartGame startGameHandler={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen choicedNumber={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Guess the number" />
      {content}
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
