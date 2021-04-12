import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const RenderMeal = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={() => {}}>
        <View>
          <View style={styles.mealRow}>
            <Text> {item.title} </Text>
          </View>
          <View style={styles.mealRow}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RenderMeal;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
  },
  mealRow: {
    flexDirection: 'row',
  },
});
