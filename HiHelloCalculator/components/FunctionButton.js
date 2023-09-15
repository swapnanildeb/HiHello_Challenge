import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');


export default function FunctionButton({ label , arg1, arg2, argNum, arg1StateChanger, 
  arg2StateChanger, argNumStateChanger, currFunc, funcChanger}) {

  checkAction = (func, arg1, arg2, arg1StateChanger, arg2StateChanger, argNumStateChanger, currFunc, funcChanger) => {
    switch(func) {
      case 'AC': {
        arg1StateChanger('')
        arg2StateChanger('')
        argNumStateChanger('1')
        break;
      }
      case '+' : {
        funcChanger('+')
        //Enhancement to take more than two values
        // if(argNum == '2'){
        //   arg1 = toString(parseFloat(arg1) + parseFloat(arg2))
        //   arg2StateChanger('')
        // }
          
          argNumStateChanger('2')
        break;
      }
      case '-' : {
        funcChanger('-')
        //Enhancement to take more than two values
        // if(argNum == '2'){
        //   arg1 = toString(parseFloat(arg1) + parseFloat(arg2))
        //   arg2StateChanger('')
        // }
          
          argNumStateChanger('2')
        break;
      }
      case 'X' : {
        funcChanger('*')
        //Enhancement to take more than two values
        // if(argNum == '2'){
        //   arg1 = toString(parseFloat(arg1) + parseFloat(arg2))
        //   arg2StateChanger('')
        // }
          
          argNumStateChanger('2')
        break;
      }
      case '/' : {
        funcChanger('/')
        //Enhancement to take more than two values
        // if(argNum == '2'){
        //   arg1 = toString(parseFloat(arg1) + parseFloat(arg2))
        //   arg2StateChanger('')
        // }
          
          argNumStateChanger('2')
        break;
      }

      case '+/-' : {
        if(argNum == '1') {
          if(arg1.charAt(0) == '-'){
            arg1StateChanger(arg1.substring(1))
          }
          else {
            result = "-"
            result = result + arg1.toString()
            console.log(result)
            arg1StateChanger(result.toString())
          }
        }
        else {
          if(arg2.charAt(0) == '-'){
            arg2StateChanger(arg2.substring(1))
          }
          else {
            arg2StateChanger("-" + arg2.toString)
          }

        }
      }

      case '=' : {
        switch(currFunc){
          case '+' : {
            result = (parseFloat(arg1) + parseFloat(arg2)).toString()
            argNumStateChanger('2')
            arg2StateChanger(result)
            break;
          }
          case '-' : {
            result = (parseFloat(arg1) - parseFloat(arg2)).toString()
            argNumStateChanger('2')
            arg2StateChanger(result)
            break;
          }
          case '*' : {
            console.log(result)
            result = (parseFloat(arg1) * parseFloat(arg2)).toString()
            argNumStateChanger('2')
            arg2StateChanger(result)
            break;
          }
          case '/' : {
            result = (parseFloat(arg1) / parseFloat(arg2)).toString()
            argNumStateChanger('2')
            arg2StateChanger(result)
            break;
          }
        }
        break;
      }
      default: {
        break;
      }

    }
  }

  appendString = (current, addition) => {
    return current.concat(addition)
  }

  return (
    <View  style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => 
        checkAction(label, arg1, arg2, arg1StateChanger, arg2StateChanger, argNumStateChanger, currFunc, funcChanger)}>
        <Text style ={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: width/4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: '100%',
    width: width/4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
