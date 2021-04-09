import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CategoryDetailScreen,
  CategoryMealsScreen,
  CategoryScreen,
  FavoritesScreen,
  FilterScreen,
} from '../screens';

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CategoryScreen">
      <Stack.Screen
        name="CategoryDetailScreen"
        component={CategoryDetailScreen}
      />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
      />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
