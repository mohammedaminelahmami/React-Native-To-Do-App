import { View, StyleSheet, Text } from "react-native";

export default function Header ()
{
    return (
        <View style={styles.content}>
            <Text style={styles.text}>☁ Add Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        backgroundColor: 'dodgerblue',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});