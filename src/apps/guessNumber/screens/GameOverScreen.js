import React from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {PrimaryButton, OpenSansText, OpenSansBoldText} from '../components';
import {colors} from '../constants';

const GameOverScreen = ({guessRounds, userNumber, configerNewGame}) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <OpenSansBoldText style={styles.title}>
          The game is over
        </OpenSansBoldText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/success.png')}
          />
        </View>
        <OpenSansText>
          Your phone needed
          <OpenSansBoldText style={styles.highlight}>
            {` ${guessRounds} `}
          </OpenSansBoldText>
          to guess the number
          <OpenSansBoldText style={styles.highlight}>
            {` ${userNumber}`}
          </OpenSansBoldText>
        </OpenSansText>
        <PrimaryButton
          text="Play again"
          style={{width: 100, marginTop: 5}}
          onPress={() => configerNewGame()}
        />
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary,
    overflow: 'hidden',
    marginVertical: 30,
  },
  highlight: {
    color: colors.primary,
  },
});
