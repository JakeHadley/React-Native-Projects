import React, { useContext } from 'react';
import { Button } from 'material-bread';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';

const AuthNavLink = ({ text, routeName }) => {
  const navigation = useNavigation();
  //not the best to do this here. makes the component unresusable
  const { clearErrorMessage } = useContext(AuthContext);

  return (
    <Button
      type='text'
      text={text}
      onPress={() => {
        navigation.navigate(routeName);
        clearErrorMessage();
      }}
    />
  );
};

export default AuthNavLink;
