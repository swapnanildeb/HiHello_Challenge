import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import DigitButton from './components/DigitButton'
import {Styles} from './styles/BaseStyles.tsx'

export default function App() {
  return (
    <View style={Styles.container}>
      <View style={Styles.resultContainer}>
      </View>
      <View style={Styles.resultContainer}>
          <Text style= {Styles.resultText}>Open up App.tsx to start working on your app!</Text>
        </View>
      <View style={Styles.keyboardContainer}>
        <View style={Styles.buttonRowContainer}>
          <View style={Styles.buttonRow}>
            <View>
              <DigitButton label = 'X'/>
            </View>
            <View>
              <DigitButton label = 'Y'/>
            </View>
            <View>
              <DigitButton label = 'Z'/>
            </View>
            <View>
              <DigitButton label = 'V'/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>
              <DigitButton label = 'X'/>
            </View>
            <View>
              <DigitButton label = 'Y'/>
            </View>
            <View>
              <DigitButton label = 'Z'/>
            </View>
            <View>
              <DigitButton label = 'V'/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>
              <DigitButton label = 'X'/>
            </View>
            <View>
              <DigitButton label = 'Y'/>
            </View>
            <View>
              <DigitButton label = 'Z'/>
            </View>
            <View>
              <DigitButton label = 'V'/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>
              <DigitButton label = 'X'/>
            </View>
            <View>
              <DigitButton label = 'Y'/>
            </View>
            <View>
              <DigitButton label = 'Z'/>
            </View>
            <View>
              <DigitButton label = 'V'/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>
              <DigitButton label = 'X'/>
            </View>
            <View>
              <DigitButton label = 'Y'/>
            </View>
            <View>
              <DigitButton label = 'Z'/>
            </View>
            <View>
              <DigitButton label = 'V'/>
            </View>
          </View>
        </View>


      </View>
    </View>
  );
}
