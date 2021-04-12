import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CategoryGridTile = ({item}) => {
  const navigation = useNavigation();
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItemStyle}>
      <TouchableComponent
        onPress={() =>
          navigation.navigate('CategoryMeals', {
            categoryId: item.id,
          })
        }>
        <View style={{...styles.container, ...{backgroundColor: item.color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {' '}
            {item.title}{' '}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItemStyle: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'right',
  },
});
