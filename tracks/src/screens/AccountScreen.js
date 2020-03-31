import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'material-bread';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Button
        text='Sign Out'
        type='flat'
        onPress={signout}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default AccountScreen;
