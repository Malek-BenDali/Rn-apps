import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import {CATEGORIES} from '../data/dummyData';
import {colors} from '../assets';
import {CategoryGridTile} from '../components';

const CategoriesScreen = props => {
  props.navigation.setOptions({
    headerTitle: 'Meals Categories',
  });

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => <CategoryGridTile item={item} />}
      />
      <StatusBar backgroundColor={colors.primary} />
    </>
  );
};

export {CategoriesScreen};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemStyle: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
