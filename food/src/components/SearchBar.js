import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.backgroundStyle}>
    <Icon name='search' style={styles.iconStyle} />
    <TextInput
      placeholder='search'
      style={styles.inputStyle}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      autoCapitalize='none'
      autoCorrect={false}
    />
  </View>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row'
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default SearchBar;
