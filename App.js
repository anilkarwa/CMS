import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import StackNav from './navigation/StackNav';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </>
  );
};

export default App;
