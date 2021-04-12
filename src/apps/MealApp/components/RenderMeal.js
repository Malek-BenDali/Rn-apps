import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const RenderMeal = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MealDetail', {
            mealId: item.id,
          });
        }}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              source={{uri: item.imageUrl}}
              style={styles.bgImage}>
              <Text numberOfLines={2} style={styles.title}>
                {item.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text> {item.duration}m </Text>
            <Text> {item.complexity.toUpperCase()} </Text>
            <Text> {item.affordability.toUpperCase()} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RenderMeal;

const styles = StyleSheet.create({
  mealItem: {
    alignSelf: 'center',
    height: 250,
    width: '95%',
    backgroundColor: '#ddd',
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    height: '10%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
