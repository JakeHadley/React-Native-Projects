import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressCircle } from 'material-bread';

const ResolveAuthScreen = () => (
  <View style={styles.container}>
    <ProgressCircle
      color='blue'
      size={100}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ResolveAuthScreen;
