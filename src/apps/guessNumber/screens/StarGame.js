import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
} from 'react-native';

import {Card, Input, NumberContainer} from '../components';
import {colors} from '../constants';
const StarGame = ({startGameHandler}) => {
  const [secretNumber, setSecretNumber] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleNumberChange = number => {
    setSecretNumber(number.replace(/[^0-9]/g, ''));
  };
  const handleReset = () => {
    setSecretNumber('');
    setConfirm(false);
    animatedValue.setValue(0);
  };

  const handleConfirm = () => {
    const choseNumber = parseInt(secretNumber);
    if (
      !choseNumber ||
      isNaN(choseNumber) ||
      choseNumber <= 0 ||
      choseNumber > 99
    ) {
      Alert.alert('Invalid number', 'Number has to be between 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: setSecretNumber('')},
      ]);
      return;
    }
    setConfirm(true);
    setSelectedNumber(choseNumber);
    setSecretNumber('');
    Keyboard.dismiss();
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}> Start a New Game </Text>
        <Card style={styles.card}>
          <Input
            style={styles.input}
            placeholder="00"
            keyboardType="number-pad"
            autoFocus={true}
            maxLength={2}
            blurOnSubmit
            onChangeText={number => handleNumberChange(number)}
            value={secretNumber}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={{...styles.button, backgroundColor: colors.secondary}}
              onPress={() => handleReset()}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleConfirm()}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {confirm && (
          <Animated.View
            style={[
              styles.summaryContainer,
              {
                transform: [
                  {
                    scale: animatedValue.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: [0, 0.5, 1],
                    }),
                  },
                  {
                    rotateY: animatedValue.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: ['0deg', '360deg', '720deg'],
                    }),
                  },
                ],
              },
            ]}>
            <Card style={styles.cardPadding}>
              <Text> You selected </Text>
              <NumberContainer> {selectedNumber} </NumberContainer>
              <TouchableOpacity
                style={[styles.button, styles.startGameButton]}
                onPress={() => startGameHandler(selectedNumber)}>
                <Text style={styles.buttonText}>Start Game</Text>
              </TouchableOpacity>
            </Card>
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StarGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  startGameButton: {
    width: 110,
    height: 40,
  },
  cardPadding: {
    padding: 10,
  },
  summaryContainer: {
    marginTop: 10,
    width: 180,
    alignItems: 'center',
    zIndex: 5,
  },
  card: {
    paddingVertical: 10,
    height: 180,
    width: '80%',
  },
  input: {
    width: 70,
    textAlign: 'center',
  },
  title: {
    marginVertical: 10,
    fontSize: 24,
    fontStyle: 'italic',
    color: 'black',
  },
  button: {
    backgroundColor: colors.primary,
    width: 80,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
  },
});
