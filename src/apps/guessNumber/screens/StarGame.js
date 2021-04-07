import React from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';

import {Card} from '../components';
import {colors} from '../constants';
const StarGame = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Start a New Game </Text>
      <Card style={styles.card}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="enter a number"
          autoFocus={true}
        />
        <View style={styles.buttonsContainer}>
          <Pressable
            style={{...styles.button, backgroundColor: colors.secondary}}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Confirm</Text>
          </Pressable>
        </View>
      </Card>
    </View>
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
  title: {
    marginVertical: 10,
    fontSize: 24,
    fontStyle: 'italic',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    width: 150,
    borderRadius: 10,
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
