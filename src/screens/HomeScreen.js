import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Swiper from '../components/Swiper';
import {SERVER_API} from '../helper';

const HomeScreen = ({navigation}) => {
  const [post, setPosts] = useState([]);
  useEffect(async () => {
    const response = await fetch(`${SERVER_API}/post/all`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setPosts(data);
  }, []);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{
              height: 30,
              width: 30,
            }}
            source={require('../images/menu.png')}
          />
        </TouchableOpacity>
        <Image
          style={{
            height: 50,
            width: 140,
          }}
          source={require('../images/logo.png')}
        />
        <Text></Text>
      </View>
      <View style={{flex: 1}}>
        <Swiper post={post} />
      </View>
      <View style={{height: 60}} />
    </View>
  );
};

export default HomeScreen;
