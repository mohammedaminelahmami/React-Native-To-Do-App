import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo()
{
    return(
    <View style={styles.input}>
        <TextInput placeholder="Add todo" />
        <Button title='Add to do' />
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