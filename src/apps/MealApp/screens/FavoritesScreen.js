import React from 'react';
import {MealList} from '../components';
import {useSelector} from 'react-redux';

const FavoritesScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: 'Your favorites',
  });

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  return <MealList data={favMeals} />;
};

export default FavoritesScreen;
