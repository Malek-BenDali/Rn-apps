import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummyData';
import {useNavigation} from '@react-navigation/core';

const MealDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  navigation.setOptions({
    headerTitle: selectedMeal.title,
  });
  return (
    <View>
      <Text> </Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
