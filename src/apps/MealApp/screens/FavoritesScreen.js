import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MealList} from '../components';
import {MEALS} from '../data/dummyData';

const FavoritesScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: 'Your favorites',
  });

  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');

  return <MealList data={favMeals} />;
};

export default FavoritesScreen;
