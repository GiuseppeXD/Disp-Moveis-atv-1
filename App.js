//import liraries
import React, { Component } from 'react';
import {Text, View, Button, Alert, TouchableOpacity} from 'react-native';

import styles from './src/styles/LoginStyles'; 
import LoginComponent from './src/components/Login.js'

// create a component
class App extends Component {

  state={
    myState: 'Aulas síncronas: exemplos de aplicação.',
  }
  updateState = () =>{
    this.setState({
      myState: 'Aulas assíncronas: Atividades.'})
  }

  render()  {
    return (
      <View style={styles.container}>
        <LoginComponent myState = {this.state.myState} updateState = {this.updateState}/>      
      </View>
     
    ); 
};
}

//make this component available to the app
export default App;






