import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MEALS} from '../data/dummyData';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useNavigation} from '@react-navigation/core';
import {CustomBottonHeader} from '../components';

const MealDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomBottonHeader}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('fav');
          }}
        />
      </HeaderButtons>
    ),
  });
  return (
    <View>
      <Text> </Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({});
