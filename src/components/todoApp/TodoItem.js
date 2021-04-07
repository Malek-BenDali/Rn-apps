import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoItem = ({item: {id, value}, deleteItem}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={2}>
        {' '}
        {value}{' '}
      </Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteItem(id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
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
