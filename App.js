import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import Header from './Components/Header';
import { FontAwesome5 } from '@expo/vector-icons';
import AddTodo from './Components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([{}]);

  const pressHandler = (key)=>{
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  return (
    <View style={styles.body}>
      <Header />

      <View style={styles.container}>
        <AddTodo addTodo={(text)=>{setTodos([...todos, text])}} />
            <FlatList
              data={todos}
              renderItem={(item)=>(
                  <TouchableOpacity onPress={()=>pressHandler(item.item.key)}>
                    <View style={styles.todo}>
                      <FontAwesome5 name="trash" size={18} color="black" />
                      <Text style={styles.text_todo}>{item.item.todo}</Text>
                    </View>
                  </TouchableOpacity>
              )}
            />
            {/* {todos.map((item, index)=>{
              return(
                <TouchableOpacity key={index} onPress={(index)=>pressHandler(index)}>
                  <View style={styles.todo}>
                    <FontAwesome5 name="trash" size={18} color="black" />
                    <Text style={styles.text_todo}>{item.todo}</Text>
                  </View>
                </TouchableOpacity>
              )
            })} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
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
    marginLeft: 12,
  },
});
