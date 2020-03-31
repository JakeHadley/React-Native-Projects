import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Heading, TextField, Button } from 'material-bread';

const AuthForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { headerText, errorMessage, onSubmit, submitButtonText } = props;

  return (
    <React.Fragment>
      <Heading type={4} style={{ padding: 40, alignSelf: 'center' }}>{headerText}</Heading>
      <TextField
        type={'outlined'}
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextField
        type={'outlined'}
        label={'Password'}
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {
        errorMessage ?
          <Heading type={6} style={styles.errorMessage}>{errorMessage}</Heading> :
          null
      }
      <Button
        type='flat'
        text={submitButtonText}
        style={{ marginVertical: 10 }}
        onPress={() => onSubmit({ email, password })}
      />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
    margin: 15,
  }
});

export default AuthForm;
