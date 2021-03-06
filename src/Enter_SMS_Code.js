import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View,
  TextInput,
  text,
  TouchableOpacity
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.inputStyle} placeholder = "Enter SMS Code"
          onChangeText={(Text) => {
              this.setState({PhoneNumber: text});
          }
        }
        />

        <TouchableOpacity >
              <Text style={styles.GetSMS}>Login</Text>
        </TouchableOpacity>

      </View>
     
    );
  }
}

var styles = StyleSheet.create({
  container: {
    //backgroundColor: '#26AE90',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  inputStyle: {
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: 15,
    textAlign: 'center',
  },
  GetSMS: {
    backgroundColor: '#f1f1f1',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    marginTop: 25,
    color: '#26AE90',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})