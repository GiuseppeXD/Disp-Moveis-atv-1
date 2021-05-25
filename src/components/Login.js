//import liraries
import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from '../styles/ManipulandoStyles';

// create a component
class Login extends Component {

  state = {
    nome: ''
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../image/reactnative.png')} style={styles.logo} />
        <TextInput style={styles.input} onChangeText = {text => this.state.nome = text} placeholder="Informe seu nome" />
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} />
        <TouchableOpacity
          //style={styles.button} onPress={() => {this.pressed()}}>
          style={styles.button} onPress={() => { this.props.navigation.navigate('Home',{'nome' : this.state.nome}) }}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
//make this component available to the app
export default Login;






