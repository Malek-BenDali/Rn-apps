import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../assets';
import {CATEGORIES} from '../data/dummyData';

const CategoryMealsScreen = ({navigation, route}) => {
  const id = route.params.categoryId;
  const selectedCategory = CATEGORIES.find(category => category.id === id);
  navigation.setOptions({
    headerTitle: selectedCategory.title,
  });
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>

      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        onPress={() =>
          navigation.navigate('CategoryDetailScreen')
        }></TouchableOpacity>
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
