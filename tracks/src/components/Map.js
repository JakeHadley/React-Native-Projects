import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import ResolveAuthScreen from '../screens/ResolveAuthScreen';

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  const points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + (i * 0.001),
      longitude: -122.03121 + (i * 0.001)
    });
  }

  if (!currentLocation) {
    return <ResolveAuthScreen />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Polyline
        coordinates={points}
      />
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor='rgba(158, 158, 255, 1.0)'
        fillColor='rgba(158, 158, 255, 0.3)'
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 600
  }
});

export default Map;
