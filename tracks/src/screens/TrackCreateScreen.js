import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from 'material-bread';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [error, setError] = useState('');
  const { addLocation } = useContext(LocationContext);
  const startWatching = async () => {
    try {
      const req = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (req !== RESULTS.GRANTED) setError('Location access denied');
      Geolocation.watchPosition(
        position => addLocation(position),
        err => setError(err.message),
        { enableHighAccuracy: true, distanceFilter: 10 }
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView>
      <Heading type={5}>TrackCreateScreen</Heading>
      <Map />
      <Text>{error}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
