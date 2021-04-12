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

const CategoriesScreen = props => {
  props.navigation.setOptions({
    headerTitle: 'Meals Categories',
  });
  const renderGridItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.gridItemStyle}
        onPress={() =>
          props.navigation.navigate('CategoryMeals', {
            categoryId: item.id,
          })
        }>
        <Text> {item.title} </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={renderGridItem}
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
