import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// styles 
import styles from './styles';

// common
import { Text, View } from 'react-native';

// Components 
import SwitchNavigator from './navigation/SwitchNavigator.js';
import reducer from './reducers';

// Disable Yellow warnings in dev mode 
// console.disableYellowBox = true;

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default function App() {
  return (
    <Provider store={store}>
      <SwitchNavigator />
    </Provider>
  );
}

 