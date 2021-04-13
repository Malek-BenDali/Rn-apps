import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Todo, GuessNumber, MealApp} from '../apps';

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Todo">
        <Drawer.Screen name="Todo" component={Todo} />
        <Drawer.Screen name="GuessTheNumber" component={GuessNumber} />
        <Drawer.Screen
          name="MealApp"
          component={MealApp}
          options={{
            drawerLabel: 'Meals',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
