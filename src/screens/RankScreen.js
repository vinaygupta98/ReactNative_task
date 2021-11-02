import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  RefreshControl,
  Image,
  ScrollViewComponent,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Card2 from '../components/Card-2';
import Cardsm from '../components/card-sm.js';
import {SERVER_API} from '../helper';
import {WebView} from 'react-native-webview';

const RankScreen = () => {
  const [data, setData] = useState({likes: [], uploader: []});
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const response = await fetch(`${SERVER_API}/post/top`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setData(data);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  };
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
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <ScrollView
      bounces={true}
      refreshControl={<RefreshControl refreshing={refreshing} />}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          flex: 1,
          margin: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '90%',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 24,
              paddingLeft: 10,
              paddingVertical: 10,
            }}>
            Top 5 Liked Posts
          </Text>
          <TouchableOpacity
            onPress={() => {
              setRefreshing(true);
              onRefresh();
            }}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../images/refresh.png')}
            />
          </TouchableOpacity>
        </View>
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
