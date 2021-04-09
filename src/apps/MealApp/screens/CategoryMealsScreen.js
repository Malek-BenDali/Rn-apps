import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        onPress={() =>
          props.navigation.navigate('CategoryDetailScreen')
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
