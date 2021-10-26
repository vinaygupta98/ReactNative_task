import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Main from './main';
const App = () => {
  return (
    <SafeAreaView>
      <View style={{height: '100%', backgroundColor: '#fff'}}>
        <StatusBar barStyle="default" />
        <Main />
      </View>
    </SafeAreaView>
  );
};

export default App;
