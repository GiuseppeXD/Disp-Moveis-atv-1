//import liraries
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/components/Login';
import Home from './src/components/Home';

// create a component
const MainNavigation = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
    header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions:{
    headerTitle: 'Home',
    tabBarLabel: 'Testando!',
    }
  }
}
)

//make this component available to the app
export default createAppContainer(MainNavigation);






