import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

const App = () => (
  <BlogProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Search'
        screenOptions={{
          title: 'Screen',
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen name='Search' component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </BlogProvider>
);

export default App;
