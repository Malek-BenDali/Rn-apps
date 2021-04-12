import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from 'react-native';
import {
  CategoryMealsScreen,
  CategoriesScreen,
  FavoritesScreen,
  FilterScreen,
  MealDetailScreen,
} from '../screens';
import {colors} from '../assets';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const option = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : colors.primary,
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Category" screenOptions={option}>
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="Category" component={CategoriesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};
const Favorites = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites" screenOptions={option}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};

const tabBarOptions = {
  activeTintColor: colors.secondary,
};

const Tabs = () => (
  <Tab.Navigator tabBarOptions={tabBarOptions}>
    <Tab.Screen
      name="Meals"
      component={MealsNavigator}
      options={{
        tabBarIcon: tabInfo => (
          <Ionicons name="restaurant-outline" size={25} color={tabInfo.color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarIcon: tabInfo => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
        },
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
