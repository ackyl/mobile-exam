import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class App extends Component {
  render (){
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback>
          <View style={styles.button}>
            <Text style={styles.text}>A</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.text}>B</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.text}>C</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // Untuk menentukan arah ususan component (defaul: column)
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(245, 192, 188)',
    flex: 1
  },
  button:{
    marginTop: 50,
    width: 100,
    height: 50,
    backgroundColor: 'powderblue'
  },
  text: {margin: 2, color:'white', textAlign: 'center'}
})

export default App