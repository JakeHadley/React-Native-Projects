import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null
    };
  }
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAJdHl7S1BYTRPmlsoTgTkMBujzPfEwlgg',
      authDomain: 'authentication-b7d2a.firebaseapp.com',
      databaseURL: 'https://authentication-b7d2a.firebaseio.com',
      projectId: 'authentication-b7d2a',
      storageBucket: 'authentication-b7d2a.appspot.com',
      messagingSenderId: '1047474976957'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
