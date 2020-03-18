import React, { useContext, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
  //we pull the state and whatever actions we want off the context object
  const { state, removeBlogPost, getBlogPosts } = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts();

    //this is used to refresh the page when we navigate back to it
    //RN doesn't unmount the component during a navigation change,
    //so this is used to do something when we come back to the page
    const listener = navigation.addListener('focus', () => {
      getBlogPosts();
    });

    return () => listener.remove();
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={post => post.title}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                <Icon name='trash' style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 24,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18
  }
});

export default IndexScreen;
