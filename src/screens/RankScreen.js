import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Card2 from '../components/Card-2';
import Cardsm from '../components/card-sm.js';
import {SERVER_API} from '../helper';

const RankScreen = () => {
  const [data, setData] = useState({likes: [], uploader: []});
  useEffect(async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const response = await fetch(`${SERVER_API}/post/top`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      // const data = await response.json();
      // setData(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'flex-start',
          flex: 1,
          margin: 10,
        }}>
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 10,
            paddingVertical: 10,
          }}>
          Top 5 Liked Posts
        </Text>
        {data.likes.map((col, i) => (
          <Card2 key={i} {...col} />
        ))}
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 10,
            paddingVertical: 10,
            paddingTop: 30,
          }}>
          Top 5 Uploader
        </Text>
        {data.uploader.map((col, i) => (
          <Cardsm key={i} {...col} />
        ))}
      </View>
    </ScrollView>
  );
};

export default RankScreen;
