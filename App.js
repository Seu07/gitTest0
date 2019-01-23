/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
      StyleSheet, 
      Text, 
      View,
      TextInput,
      TouchableOpacity,
      text
    } from 'react-native';
import axios from 'axios';

var headers = {
    'Content-Type': 'application/json',
    'Accept':'*/*'
  }
var data = {
  'login': 'admin',
  'password': 'admin'
}
export default class Home extends Component {
  static navigationOptions = {
    title: 'LOGING',
  };
  constructor(props) {
    super(props);
    this.state={
      login: '',
      password: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputStyle} placeholder = "Username"
          onChangeText={(Text) => {
            this.setState({Username: text});
          }}
        />

        <TextInput style={styles.inputStyle} placeholder = "Password"
          secureTextEntry={true}
          onChangeText={(Text) => {
            this.setState({Password: text});
          }}
        />

        <TouchableOpacity onPress={() => {
            axios.post('Http://192.168.1.69:3000/auth',data, {headers:headers
               //username: this.state.Username,
               //password: this.state.Password
   
            }).then(response => response.json())
              .then((responseJson) => {  
                  if(responseJson == "ok"){
                    alert("Successful Login");
                    this.props.navigation.navigate("Enter_phone_num");
                  }else{
                    alert("Wrong Login Details");
                  }
                //return responseJson.message            
              }).catch(error => {
               // if(response.status >= 400)
                alert(error.response.data.message);
                //console.log(error); 
              })
          }}
        >
            <Text style={styles.btnTextLogin}>LOGING</Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={styles.btnTextSignUp}>Not yet register? SignUp Now</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#26AE90',
    flex: 1,
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20
  },
  inputStyle: {
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 20,
    paddingLeft: 15
  },
  btnTextLogin: {
    backgroundColor: '#f1f1f1',
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 18,
    marginTop: 25,
    color: '#26AE90',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnTextSignUp: {
    fontSize: 16,
    color: '#fff',
    marginTop: 70,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})