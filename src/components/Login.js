import React, { Component, useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

import styles from '../styles/LoginStyles'; 


const LoginComponent = (props) => {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');

   let pressed = () => {
      Alert.alert('Login Infos', name + '/' + password);
   }
   return (
      <View style={styles.container}>

         <Image
            source={require('../image/reactnative.png')}
            style={styles.logo} />
         
         <TextInput
            style={styles.input}
            placeholder="Informe seu nome"
            value={name}
            onChangeText={text => setName(text)}/>
         

         <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
         />

         <TouchableOpacity
            style={styles.button}
            onPress={() => { pressed() }}>
            <Text style={styles.buttonText}>Acessar</Text>
         </TouchableOpacity>

      </View>
   )
}
export default LoginComponent;