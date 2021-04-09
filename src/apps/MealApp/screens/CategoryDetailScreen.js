import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CategoryDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>CategoryDetailScreen</Text>
    </View>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
