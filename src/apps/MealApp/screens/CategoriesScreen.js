import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummyData';

const renderGridItem = ({item}) => {
  return (
    <View style={styles.gridItemStyle}>
      <Text> {item.title} </Text>
    </View>
  );
};

const CategoriesScreen = props => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;

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
