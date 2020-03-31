import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';

const MainTab = createBottomTabNavigator();
const LoginStack = createStackNavigator();
const TrackStack = createStackNavigator();

const Track = () => (
  <TrackStack.Navigator>
    <TrackStack.Screen
      name='TrackListScreen'
      component={TrackListScreen}
    />
    <TrackStack.Screen
      name='TrackDetailScreen'
      component={TrackDetailScreen}
    />
  </TrackStack.Navigator>
);

const Root = () => {
  const { state, tryLocalSignin } = useContext(AuthContext);
  const { token, loading } = state;

  useEffect(() => { tryLocalSignin(); }, []);

  if (loading) return <ResolveAuthScreen />;

  return (
    <NavigationContainer ref={setNavigator}>
      {token ?
        (
          <MainTab.Navigator>
            <MainTab.Screen
              name='Track'
              component={Track}
            />
            <MainTab.Screen
              name='TrackCreateScreen'
              component={TrackCreateScreen}
            />
            <MainTab.Screen
              name='AccountScreen'
              component={AccountScreen}
            />
          </MainTab.Navigator>
        ) : (
          <LoginStack.Navigator
            screenOptions={{
              cardStyle: { backgroundColor: 'white' },
              headerShown: false,
            }}
          >
            <LoginStack.Screen
              name='SignupScreen'
              component={SignupScreen}
            />
            <LoginStack.Screen
              name='SigninScreen'
              component={SigninScreen}
            />
          </LoginStack.Navigator>
        )
      }
    </NavigationContainer >
  );
};

const App = () => (
  <SafeAreaProvider>
    <LocationProvider>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </LocationProvider>
  </SafeAreaProvider>
);

export default App;


    // <Stack.Navigator
    //     initialRouteName='Index'
    //     screenOptions={{
    //       cardStyle: {
    //         backgroundColor: 'white'
    //       }
    //     }}
    //   >
    //     <Stack.Screen
    //       name='Index'
    //       component={IndexScreen}
    //       options={({ navigation }) => ({
    //         headerRight: () => (
    //           //The props were done this way because React Navigation
    //           //doesn't provide them automatically, like it does with the `header` object. 
    //           //We return a function from `options` and receive `navigation` as a prop
    //           //We then pass it down to the component being rendered
    //           <PlusButton
    //             navigation={navigation}
    //             icon={'plus'}
    //             screen={'Create'}
    //           />
    //         )
    //       })}
    //     />
    //     <Stack.Screen
    //       name='Show'
    //       component={ShowScreen}
    //       options={({ navigation, route }) => ({
    //         title: route.params.id,
    //         headerRight: () => (
    //           //same here
    //           <PlusButton
    //             navigation={navigation}
    //             icon={'edit'}
    //             screen={'Edit'}
    //             id={route.params.id}
    //           />
    //         )
    //       })}
    //     />
    //     <Stack.Screen name='Create' component={CreateScreen} />
    //     <Stack.Screen name='Edit' component={EditScreen} />
    //   </Stack.Navigator>
