import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
