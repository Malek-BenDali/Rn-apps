import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {
  CategoryDetailScreen,
  CategoryMealsScreen,
  CategoriesScreen,
  FavoritesScreen,
  FilterScreen,
  MealDetailScreen,
} from '../screens';
import {colors} from '../assets';

const Stack = createStackNavigator();

const option = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : colors.primary,
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Category" screenOptions={option}>
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="Category" component={CategoriesScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
