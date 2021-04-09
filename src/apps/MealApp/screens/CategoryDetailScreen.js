import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const CategoryDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryDetailScreen</Text>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: 'pink'}}
        onPress={() => props.navigation.popToTop()}>
        <Text>Go to top</Text>
      </TouchableOpacity>
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
