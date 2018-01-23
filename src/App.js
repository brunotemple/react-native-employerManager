import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDt7iV-X_6TetTIJv-_r1AlDvibhcbsc_M',
      authDomain: 'employer-manager.firebaseapp.com',
      databaseURL: 'https://employer-manager.firebaseio.com',
      projectId: 'employer-manager',
      storageBucket: 'employer-manager.appspot.com',
      messagingSenderId: '611576066815'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;