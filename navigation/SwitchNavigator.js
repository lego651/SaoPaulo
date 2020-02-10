import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// components
import TabNavigator from './TabNavigator.js'
import AuthNavigator from './AuthNavigator.js'

const SwitchNavigator = createSwitchNavigator(
  {
    Home: { 
      screen: TabNavigator
    },
    Auth: { 
      screen: AuthNavigator
    }
  },
  {
    initialRouteName: 'Auth',
  }
);

export default createAppContainer(SwitchNavigator);