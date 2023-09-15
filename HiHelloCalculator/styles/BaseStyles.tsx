import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');


export const Styles = StyleSheet.create({
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
  keyboardContainer: {
    flex: 2/3,
    alignItems: 'center',
  },
  buttonRowContainer: {
    flex: 1/5,
  },
  buttonRow: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    border: 'solid',
    borderWidth: 2
  },
});