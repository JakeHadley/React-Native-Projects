import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyD30oN4GGuo8vOgiplj_yjv5NApqJK1de8',
      authDomain: 'manager-33d71.firebaseapp.com',
      databaseURL: 'https://manager-33d71.firebaseio.com',
      projectId: 'manager-33d71',
      storageBucket: 'manager-33d71.appspot.com',
      messagingSenderId: '52142052260',
      appId: '1:52142052260:web:86c1d42384173fa3'
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
    //need to do middleware to apply redux-thunk for async actions in redux.

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
