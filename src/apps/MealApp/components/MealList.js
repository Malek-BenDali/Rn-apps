import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import RenderMeal from './RenderMeal';

const MealList = ({data}) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RenderMeal item={item} />}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
