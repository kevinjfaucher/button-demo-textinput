import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            favoriteColor: '',
            message: '',
        };
    }

    handleButtonPress(option) {
        const { name, favoriteColor } = this.state;
        switch (option) {
            case 1:
                this.setState({ message: `Hello, ${name}! You must like the color ${favoriteColor}.` });
                break;
            case 2:
                this.setState({ message: `Did you know, ${name}, that ${favoriteColor} is a popular color this season?` });
                break;
            case 3:
                this.setState({ message: `${name}, wearing ${favoriteColor} today?` });
                break;
            default:
                this.setState({ message: '' });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>What's your name?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    onChangeText={(text) => this.setState({ name: text })}
                />

                <Text style={styles.label}>What's your favorite color?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your favorite color"
                    onChangeText={(text) => this.setState({ favoriteColor: text })}
                />

                <Button
                    title="Greeting #1"
                    onPress={() => this.handleButtonPress(1)}
                />
                <Button
                    title="Greeting #2"
                    onPress={() => this.handleButtonPress(2)}
                    style={styles.buttonSpacing}
                />
                <Button
                    title="Greeting #3"
                    onPress={() => this.handleButtonPress(3)}
                    style={styles.buttonSpacing}
                />

                <Text style={styles.messageText}>{this.state.message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        marginTop: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        marginBottom: 20,
    },
    buttonSpacing: {
        marginVertical: 10,
    },
    messageText: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
});
