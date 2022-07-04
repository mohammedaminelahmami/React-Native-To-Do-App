import { View, StyleSheet, Text } from "react-native";

export default function Header ()
{
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        padding: 20,
        backgroundColor: 'blueviolet',
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});