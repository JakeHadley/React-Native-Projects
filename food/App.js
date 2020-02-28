import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='Search'
      screenOptions={{
        title: 'here',
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='ResultsShow' component={ResultsShowScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
