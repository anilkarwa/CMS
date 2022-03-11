import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { TextInput } from './UI/index';
import LoginScreen from './components/login/view/LoginScreen';
import StackNav from './navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNav from './navigation/DrawerNav';

const App = () => {

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <StackNav />
        {/* <DrawerNav /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
