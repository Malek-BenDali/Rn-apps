import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import TodoItem from './TodoItem';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [goal, setGoal] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);

  const handlePress = () => {
    if (goal) {
      setTodoList([...todoList, {id: Date.now().toString(), value: goal}]);
      setGoal('');
      setEmptyInput(false);
    } else setEmptyInput(true);
  };

  const deleteItem = id => {
    const itemToDelete = todoList.findIndex(element => element.id === id);
    setTodoList(todoList.filter((_, index) => index !== itemToDelete));
  };

  return (
    <View style={styles.container}>
      <View style={styles.research}>
        <View style={{width: '60%'}}>
          <TextInput
            placeholder="add todo here"
            style={styles.searchInput}
            onChangeText={goal => setGoal(goal)}
            value={goal}
          />
          {emptyInput && (
            <Text style={styles.errorMessage}>
              {' '}
              u must enter a valid todo Goal
            </Text>
          )}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  searchInput: {
    borderColor: '#26c4ec',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    width: '100%',
  },
  research: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#26c4ec',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  errorMessage: {
    color: 'blue',
    marginTop: 5,
  },
});
