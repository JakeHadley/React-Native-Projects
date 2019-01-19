import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAJdHl7S1BYTRPmlsoTgTkMBujzPfEwlgg',
      authDomain: 'authentication-b7d2a.firebaseapp.com',
      databaseURL: 'https://authentication-b7d2a.firebaseio.com',
      projectId: 'authentication-b7d2a',
      storageBucket: 'authentication-b7d2a.appspot.com',
      messagingSenderId: '1047474976957'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
