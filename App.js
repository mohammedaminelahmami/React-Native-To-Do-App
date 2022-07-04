import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import Header from './Components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import AddTodo from './Components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { todo: 'todo 1', key: '0'},
    { todo: 'todo 2', key: '1'},
    { todo: 'todo 3', key: '2'},
  ]);

  return (
    <View style={styles.body}>
      <Header />

      <View style={styles.container}>
        <AddTodo />

        <TouchableOpacity onPress={()=>{alert('hello')}}>
          <View style={styles.todo}>
            <FontAwesome5 name="trash" size={18} color="black" />
            <Text style={styles.text_todo}>{todos[0].todo}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container:{
    marginTop: 35,
  },
  todo: {
    marginTop: 20,
    marginHorizontal: 50,
    padding: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
  },
  text_todo: {
    marginLeft: 20,
  },
});
