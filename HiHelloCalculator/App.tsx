import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {Component, useState} from 'react';  

import DigitButton from './components/DigitButton'
import {Styles} from './styles/BaseStyles.tsx'


const App = () => {  
    // state = {resultText: 'howdy'};
    const[resultText, setResultText]=useState('XXX');
    const[argNum, setArgNum]=useState('1');
    
  onDigitButtonPress = () => {

    alert('You pressed a button.')
    setResultText('YYYY')
    }

        
  return (
    <View style={Styles.container}>
      <View style={Styles.resultContainer}>
      </View>
      <View style={Styles.resultContainer}>
          <Text style= {Styles.resultText}>{resultText}</Text>
      </View>
      <View style={Styles.keyboardContainer}>
        <View style={Styles.buttonRowContainer}>
          <View style={Styles.buttonRow}>
            <View>
              
              <DigitButton label = 'X' stateChanger = {setResultText}/>
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

export default App

// export default function App() {

//   constructor(props) {
//     this.state = {resultText: ''};
//   }


//   return (
//     <View style={Styles.container}>
//       <View style={Styles.resultContainer}>
//       </View>
//       <View style={Styles.resultContainer}>
//           <Text style= {Styles.resultText}>{this.resultText}}</Text>
//       </View>
//       <View style={Styles.keyboardContainer}>
//         <View style={Styles.buttonRowContainer}>
//           <View style={Styles.buttonRow}>
//             <View>
//               <DigitButton label = 'X', onpress = {this.onDigitButtonPress}/>
//             </View>
//             <View>
//               <DigitButton label = 'Y'/>
//             </View>
//             <View>
//               <DigitButton label = 'Z'/>
//             </View>
//             <View>
//               <DigitButton label = 'V'/>
//             </View>
//           </View>
//         </View>
//         <View style={Styles.buttonRowContainer}>
//          <View style={Styles.buttonRow}>
//             <View>
//               <DigitButton label = 'X'/>
//             </View>
//             <View>
//               <DigitButton label = 'Y'/>
//             </View>
//             <View>
//               <DigitButton label = 'Z'/>
//             </View>
//             <View>
//               <DigitButton label = 'V'/>
//             </View>
//           </View>
//         </View>
//         <View style={Styles.buttonRowContainer}>
//          <View style={Styles.buttonRow}>
//             <View>
//               <DigitButton label = 'X'/>
//             </View>
//             <View>
//               <DigitButton label = 'Y'/>
//             </View>
//             <View>
//               <DigitButton label = 'Z'/>
//             </View>
//             <View>
//               <DigitButton label = 'V'/>
//             </View>
//           </View>
//         </View>
//         <View style={Styles.buttonRowContainer}>
//          <View style={Styles.buttonRow}>
//             <View>
//               <DigitButton label = 'X'/>
//             </View>
//             <View>
//               <DigitButton label = 'Y'/>
//             </View>
//             <View>
//               <DigitButton label = 'Z'/>
//             </View>
//             <View>
//               <DigitButton label = 'V'/>
//             </View>
//           </View>
//         </View>
//         <View style={Styles.buttonRowContainer}>
//          <View style={Styles.buttonRow}>
//             <View>
//               <DigitButton label = 'X'/>
//             </View>
//             <View>
//               <DigitButton label = 'Y'/>
//             </View>
//             <View>
//               <DigitButton label = 'Z'/>
//             </View>
//             <View>
//               <DigitButton label = 'V'/>
//             </View>
//           </View>
//         </View>


//       </View>
//     </View>
//   );
// }
