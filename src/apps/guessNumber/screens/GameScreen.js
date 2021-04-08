import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {
  NumberContainer,
  Card,
  PrimaryButton,
  OpenSansText,
} from '../components';
import {colors} from '../constants';

const generateRandomBetweet = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) return generateRandomBetweet(min, max, exclude);
  return randomNumber;
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetweet(0, 100, props.choicedNumber),
  );

  const rounds = useRef(0);
  const currentLow = useRef(1);
  const currentHeight = useRef(100);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.choicedNumber) ||
      (direction === 'greater' && currentGuess > props.choicedNumber)
    ) {
      Alert.alert('cheater spotted', 'u know that this is wrong buddy', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') currentHeight.current = currentGuess;
    else currentLow.current = currentGuess;
    rounds.current = rounds.current + 1;
    const nextNumber = generateRandomBetweet(
      currentLow.current,
      currentHeight.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
  };

  const {choicedNumber, onGameOver} = props;

  useEffect(() => {
    if (currentGuess === choicedNumber) {
      onGameOver(rounds.current);
    }
  }, [currentGuess, choicedNumber, onGameOver]);

  return (
    <View style={styles.screen}>
      <OpenSansText> Opponent's Guess</OpenSansText>
      <NumberContainer> {currentGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <PrimaryButton text="lower" onPress={() => nextGuessHandler('lower')} />
        <PrimaryButton
          text="greater"
          onPress={() => nextGuessHandler('greater')}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: 300,
    height: 60,
    maxWidth: '80%',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: colors.primary,
    width: 80,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
