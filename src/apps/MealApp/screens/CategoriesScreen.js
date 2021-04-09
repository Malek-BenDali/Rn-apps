import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>category screen</Text>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'red'}}
        onPress={() =>
          props.navigation.navigate('CategoryMealsScreen')
        }></TouchableOpacity>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
