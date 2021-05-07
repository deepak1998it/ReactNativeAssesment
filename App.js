import React from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import Navigation from './Navigation/Router';

const App = () => {

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#00CED1"
      />
      <Navigation />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
