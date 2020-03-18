import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

const PlusButton = ({ navigation, icon, screen, id }) => (
  <TouchableOpacity onPress={() => navigation.navigate(screen, { id })}>
    <Icon name={icon} style={{ fontSize: 35 }} />
  </TouchableOpacity>
);

const App = () => (
  //If there were multiple Providers, they would simply wrap around the navigation container
  <BlogProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Index'
        screenOptions={{
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              //The props were done this way because React Navigation
              //doesn't provide them automatically, like it does with the `header` object. 
              //We return a function from `options` and receive `navigation` as a prop
              //We then pass it down to the component being rendered
              <PlusButton
                navigation={navigation}
                icon={'plus'}
                screen={'Create'}
              />
            )
          })}
        />
        <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={({ navigation, route }) => ({
            title: route.params.id,
            headerRight: () => (
              //same here
              <PlusButton
                navigation={navigation}
                icon={'edit'}
                screen={'Edit'}
                id={route.params.id}
              />
            )
          })}
        />
        <Stack.Screen name='Create' component={CreateScreen} />
        <Stack.Screen name='Edit' component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </BlogProvider>
);

export default App;
