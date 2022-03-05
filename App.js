import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {TextInput} from './UI/index';

const App: () => Node = () => {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <TextInput placeholder="Enter text" label="Email" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default App;
