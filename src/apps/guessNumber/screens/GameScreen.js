import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Alert,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import {
  NumberContainer,
  Card,
  PrimaryButton,
  OpenSansText,
} from '../components';
import {colors} from '../constants';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const generateRandomBetweet = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) return generateRandomBetweet(min, max, exclude);
  return randomNumber;
};

const GameScreen = props => {
  const [GuessList, setGuessList] = useState([]);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetweet(0, 100, props.choicedNumber),
    () => setGuessList(currentGuess),
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width,
  );
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height,
  );

  const currentLow = useRef(1);
  const currentHeight = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
      setAvailableDeviceWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

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
    const nextNumber = generateRandomBetweet(
      currentLow.current,
      currentHeight.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
  };

  const {choicedNumber, onGameOver} = props;

  useEffect(() => {
    setGuessList([currentGuess, ...GuessList]);
    if (currentGuess === choicedNumber) {
      onGameOver(GuessList.length);
    }
  }, [currentGuess, choicedNumber, onGameOver]);

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <OpenSansText> Opponent's Guess</OpenSansText>
        <View style={styles.controls}>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            <AntDesignIcon color="white" name="minus" size={30} />
          </PrimaryButton>
          <NumberContainer> {currentGuess} </NumberContainer>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            <AntDesignIcon color="white" name="plus" size={30} />
          </PrimaryButton>
        </View>
        <View style={styles.list}>
          <ScrollView contentContainerStyle={styles.listContainer}>
            {GuessList.map((guess, index) => (
              <View key={index} style={styles.listItem}>
                <Text>#{GuessList.length - index}</Text>
                <OpenSansText> {guess} </OpenSansText>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <OpenSansText> Opponent's Guess</OpenSansText>
      <NumberContainer> {currentGuess} </NumberContainer>
      <Card style={styles.buttonContainer}>
        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
          <AntDesignIcon color="white" name="minus" size={30} />
        </PrimaryButton>
        <PrimaryButton onPress={() => nextGuessHandler('greater')}>
          <AntDesignIcon color="white" name="plus" size={30} />
        </PrimaryButton>
      </Card>
      <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.listContainer}>
          {GuessList.map((guess, index) => (
            <View key={index} style={styles.listItem}>
              <Text>#{GuessList.length - index}</Text>
              <OpenSansText> {guess} </OpenSansText>
            </View>
          ))}
        </ScrollView>
      </View>
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
  listItem: {
    borderColor: colors.primary,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'space-between',
    width: '80%',
    borderRadius: 10,
  },
  list: {
    flex: 1,
    width: 300,
  },
  listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignItems: 'center',
  },
});
