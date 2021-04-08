import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

const TodoItem = ({item: {id, value}, deleteItem}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const handleDelete = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      deleteItem(id);
    }, 2000);
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 0.5, 0],
              }),
            },
          ],
        },
      ]}>
      <Text style={styles.text} numberOfLines={2}>
        {' '}
        {value}{' '}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete()}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    borderColor: '#26c4ec',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e2eef3',
    flexDirection: 'row',
  },
  deleteButton: {
    backgroundColor: '#ff5274',
    alignItems: 'center',
    justifyContent: 'center',
    height: '104%',
    right: -1,
    width: 60,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    width: '80%',
    paddingLeft: 5,
  },
});
