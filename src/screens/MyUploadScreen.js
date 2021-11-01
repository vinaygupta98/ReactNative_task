import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View, RefreshControl, FlatList} from 'react-native';
import Card2 from '../components/Card-2';
import {SERVER_API} from '../helper';
const UploadScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [uploaded, setUploaded] = useState([]);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const response = await fetch(
        `${SERVER_API}/post?authToken=${authToken}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setUploaded(data);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);
  useEffect(async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const response = await fetch(
        `${SERVER_API}/post?authToken=${authToken}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setUploaded(data);
    } catch (error) {
      setRefreshing(false);
      Alert.alert('Error', 'Error Occured in refreshing');
      console.log(error);
    }
  }, []);
  return (
    <FlatList
      data={uploaded}
      renderItem={({item}) => <Card2 key={item._id} {...item} />}
      keyExtractor={item => item._id}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={{margin: 10}}
    />
  );
};

export default UploadScreen;
