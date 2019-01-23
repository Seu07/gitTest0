import React, {Component} from 'react';
import {
  StyleSheet,
  Text, 
  View,
  TouchableOpacity
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.CT}>Current Time</Text>

        <TouchableOpacity >
              <Text style={styles.GetSMS}>Logout</Text>
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
  CT: {
    textAlign: 'center',
    fontSize: 40,
    
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