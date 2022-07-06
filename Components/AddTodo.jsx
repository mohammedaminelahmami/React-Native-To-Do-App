import { useState, useRef } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo(props)
{

    const [text, setText] = useState('');

    const pressHandler = ()=>{
        if(text !== '')
        {
            props.addTodo({todo: text, key: Math.floor(Math.random() * 100)});
        }
    }

    const changeHandler = (val)=>{
        setText(val);
    }

    return(
        <View style={styles.input}>
            <TextInput onChangeText={changeHandler} placeholder="new todo..." />
            <Button onPress={pressHandler} title='Add' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 50,
    borderRadius: 5,
  }
});