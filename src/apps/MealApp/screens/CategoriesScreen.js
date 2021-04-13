import React from 'react';
import {StyleSheet, FlatList, StatusBar} from 'react-native';
import {CATEGORIES} from '../data/dummyData';
import {colors} from '../assets';
import {CategoryGridTile, CustomBottonHeader} from '../components';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const CategoriesScreen = ({navigation}) => {
  navigation.setOptions({
    headerTitle: 'Meals Categories',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomBottonHeader}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.openDrawer()}
        />
      </HeaderButtons>
    ),
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
