import React, { useContext } from 'react';
import { Text, View, FlatList, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context as BlogContext } from '../context/BlogContext';


const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);

  return (
    <View>
    <Icon name='search' style={styles.iconStyle} />
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  }
});

export default IndexScreen;
