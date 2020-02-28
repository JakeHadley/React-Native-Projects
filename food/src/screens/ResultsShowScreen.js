import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ route }) => {
  const [data, setData] = useState(null);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setData(response.data);
  };

  useEffect(() => {
    getResult(route.params.id);
  }, []);

  if (!data) {
    return null;
  }

  return (
    <View>
      <Text>{data.name}</Text>
      <FlatList
        data={data.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
