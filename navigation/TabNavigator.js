import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

// Components
import Door from '../screens/Door';
import Profile from '../screens/Profile';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Door,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: () => (
          <Ionicons name='ios-home' size={32} />
        ) 
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon: () => (
          <Ionicons name='ios-person' size={32} />
        ) 
      }
    },
  },
  { 
    tabBarOptions: {
      style: {
        paddingVertical: 10,
        height: 60
      }
    }
  }
);

export default createAppContainer(TabNavigator);

