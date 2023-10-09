// Start by importing necessary components and hooks from React and React Native.
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

// This is our main App component.
export default function App() {
  // Here, we set up state variables. Think of them as variables whose changes can be 'watched' by React.
  const [name, setName] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [message, setMessage] = useState('');

  // This function updates the message based on which greeting button is pressed.
  const handleButtonPress = (option) => {
    if (option === 1) {
      setMessage(`Hello, ${name}! You must like the color ${favoriteColor}.`);
    } else if (option === 2) {
      setMessage(`Did you know, ${name}, that ${favoriteColor} is popular this season?`);
    } else if (option === 3) {
      setMessage(`${name}, wearing ${favoriteColor} today?`);
    } else {
      setMessage('');
    }
  };


  // This is what our app renders (displays).
  return (
      <View style={styles.container}>
        {/* Input for name */}
        <Text style={styles.label}>What's your name?</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your name"
            // Save the text entered by the user in the 'name' state.
            onChangeText={text => setName(text)}
        />

        {/* Input for favorite color */}
        <Text style={styles.label}>What's your favorite color?</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your favorite color"
            // Save the text entered by the user in the 'favoriteColor' state.
            onChangeText={text => setFavoriteColor(text)}
        />

        {/* Three buttons that each generate a different greeting */}
        <Button title="Greeting #1" onPress={() => handleButtonPress(1)} />
        <Button title="Greeting #2" onPress={() => handleButtonPress(2)} style={styles.buttonSpacing} />
        <Button title="Greeting #3" onPress={() => handleButtonPress(3)} style={styles.buttonSpacing} />

        {/* Display the generated greeting message */}
        <Text style={styles.messageText}>{message}</Text>
      </View>
  );
}

// These are styles for our components, which make them look nice!
const styles = StyleSheet.create({
  // Style for the main container/view
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  // Style for the labels (e.g., "What's your name?")
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  // Style for the text input boxes
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  // Space between buttons
  buttonSpacing: {
    marginVertical: 10,
  },
  // Style for the greeting message
  messageText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
  },
});
