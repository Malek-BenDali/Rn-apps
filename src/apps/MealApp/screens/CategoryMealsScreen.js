import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {colors} from '../assets';
import {RenderMeal} from '../components';
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
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RenderMeal item={item} />}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
