import React from 'react';
import {View, Image} from 'react-native';

const BottomBar = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'lightgreen',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 20,
      }}>
      <Image
        style={{width: 50, height: 50}}
        source={require('../images/chat.png')}
      />
      <Image
        style={{width: 40, height: 50}}
        source={require('../images/home.png')}
      />
      <Image
        style={{width: 40, height: 50}}
        source={require('../images/list.png')}
      />
    </View>
  );
};

export default BottomBar;
