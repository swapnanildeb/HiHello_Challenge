import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {Component, useState} from 'react';  

import DigitButton from './components/DigitButton'
import FunctionButton from './components/FunctionButton'
import {Styles} from './styles/BaseStyles.tsx'


const App = () => {  
    const[arg1, setarg1]=useState('');
    const[arg2, setarg2]=useState('');
    const[argNum, setArgNum]=useState('1');
    const[currFunc, setCurrFunc] = useState('')
    
        
  return (
    <View style={Styles.container}>
      <View style={Styles.resultContainer}>
      </View>
      <View style={Styles.resultContainer}>
          <Text style= {Styles.resultText}>{argNum== '1'? arg1: arg2}</Text>
      </View>
      <View style={Styles.keyboardContainer}>
        <View style={Styles.buttonRowContainer}>
          <View style={Styles.buttonRow}>
            <View>              
              <FunctionButton label = 'AC' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} 
                argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
            <View>              
              <FunctionButton label = '+/- (Not Functional)' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
            <View>              
              <FunctionButton label = '% (Not functional)' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
            <View>              
              <FunctionButton label = '/' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>              
              <DigitButton label = '7' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>              
              <DigitButton label = '8' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>              
              <DigitButton label = '9' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>
              <FunctionButton label = 'X' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>              
              <DigitButton label = '4' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>              
              <DigitButton label = '5' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>              
              <DigitButton label = '6' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>
              <FunctionButton label = '-' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} funcChanger = {setCurrFunc}/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>              
              <DigitButton label = '1' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>              
              <DigitButton label = '2' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>              
              <DigitButton label = '3' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {argNum== '1'? setarg1 : setarg2}/>
            </View>
            <View>
              <FunctionButton label = '+' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
          </View>
        </View>
        <View style={Styles.buttonRowContainer}>
         <View style={Styles.buttonRow}>
            <View>              
              <DigitButton label = '0' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {setarg1}/>
            </View>
            <View>              
              <DigitButton label = '0' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {setarg1}/>
            </View>
            <View>              
              <DigitButton label = '.' currentArg = {argNum== '1'? arg1: arg2} stateChanger = {setarg1}/>
            </View>
            <View>
              <FunctionButton label = '=' arg1 = {arg1} arg2 = {arg2} argNum = {argNum}
                arg1StateChanger = {setarg1} arg2StateChanger = {setarg2} argNumStateChanger = {setArgNum} currFunc = {currFunc} funcChanger = {setCurrFunc}/>
            </View>
          </View>
        </View>


      </View>
    </View>
  );


    
}  

export default App