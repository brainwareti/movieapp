import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import Login from './pages/Login';
import Main from './pages/Main';
import MovieDetails from './pages/MovieDetails';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

// function App() {
//   return (
//     <BottomTab.Navigator backBehavior="order" lazy={true}>
//       <BottomTab.Screen name="Main" component={Main} />
//     </BottomTab.Navigator>
//   );
// }

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
