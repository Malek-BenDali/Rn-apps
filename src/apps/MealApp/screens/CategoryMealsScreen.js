import React from 'react';
import {MealList} from '../components';
import {CATEGORIES, MEALS} from '../data/dummyData';

const CategoryMealsScreen = ({navigation, route}) => {
  const id = route.params.categoryId;
  const selectedCategory = CATEGORIES.find(category => category.id === id);
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(id) >= 0,
  );

  navigation.setOptions({
    headerTitle: selectedCategory.title,
  });
  return <MealList data={displayedMeals} />;
};

export default CategoryMealsScreen;
