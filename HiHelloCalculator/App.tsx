import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DigitButton from './components/DigitButton'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
      </View>
      <View style={styles.resultContainer}>
          <Text style= {styles.resultText}>Open up App.tsx to start working on your app!</Text>
        </View>
      <View style={styles.keyboardContainr}>
        <Text  style= {styles.resultText}>Open up App.tsx to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultText: {
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1/6
  },
  resultTextBox: {
    borderColor: 'white',
    alignItems: 'flex-end'
  },
  keyboardContainr: {
    flex: 2/3,
    alignItems: 'center',
  },
});
