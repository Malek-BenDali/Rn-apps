import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Header} from './components';
import {colors} from './constants';
import {StartGame, GameScreen, GameOverScreen} from './screens';

const GuessNumber = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configerNewGame = () => {
    setGuessRounds(0);
    setUserNumber(0);
  };

  const startGameHandler = selectedNum => {
    setUserNumber(selectedNum);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGame startGameHandler={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen choicedNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        userNumber={userNumber}
        configerNewGame={configerNewGame}
      />
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
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
