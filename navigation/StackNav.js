import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/login/view/LoginScreen';
import DrawerNav from './DrawerNav';
import AuthLoading from './authLoadingScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen
        name="Loading"
        component={AuthLoading}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={DrawerNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNav;
