import { StyleSheet, View, Pressable, Text, Dimensions } from 'react-native';
var {height, width} = Dimensions.get('window');


export default function DigitButton({ label , currentArg, stateChanger}) {

  appendString = (current, addition) => {
    return current.concat(addition)
  }

  return (
    <View  style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => stateChanger(appendString(currentArg, label))}>
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
