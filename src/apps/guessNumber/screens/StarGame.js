import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import {Card, Input} from '../components';
import {colors} from '../constants';
const StarGame = () => {
  const [secretNumber, setSecretNumber] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumberChange = number => {
    setSecretNumber(number.replace(/[^0-9]/g, ''));
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
              onPress={() => setSecretNumber('')}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleConfirm()}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {confirm && <Text> Chosen Number : {selectedNumber} </Text>}
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
