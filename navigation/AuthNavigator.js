import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// components
import Login from '../screens/Login'
import SignupScreen from '../screens/Signup'

const StackNavigator = createStackNavigator(
  {
    Login: { 
      screen: Login,
      navigationOptions: {
        headerShown: false
      }
    },
    Signup: { 
      screen: SignupScreen
    }
  }
);

export default createAppContainer(StackNavigator);