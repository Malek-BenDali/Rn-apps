import React from 'react';
import {StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import {MEALS} from '../data/dummyData';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {useNavigation} from '@react-navigation/core';
import {CustomBottonHeader, CustomText} from '../components';

const ListItem = props => (
  <View style={styles.ListItem}>
    <CustomText> {props.children} </CustomText>
  </View>
);

const MealDetailScreen = ({route}) => {
  const navigation = useNavigation();
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  const {
    affordability,
    categoryIds,
    complexity,
    duration,
    id,
    imageUrl,
    ingrediets,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    steps,
    title,
  } = selectedMeal;

  navigation.setOptions({
    headerTitle: title,
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
    <ScrollView>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <CustomText>{duration}m</CustomText>
        <CustomText>{complexity.toUpperCase()} </CustomText>
        <CustomText>{affordability.toUpperCase()} </CustomText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingrediets?.map((ingredient, index) => (
        <ListItem key={index}> {ingredient} </ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps?.map((step, index) => (
        <ListItem key={index}> {step} </ListItem>
      ))}
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'center',
  },
  ListItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});
