import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Card2 from '../components/Card-2';
import {SERVER_API} from '../helper';
const UploadScreen = () => {
  const [uploaded, setUploaded] = useState([]);
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
      console.log(error);
    }
  }, []);
  return (
    <View style={{margin: 10}}>
      {uploaded.map((col, i) => (
        <Card2 key={col._id} {...col} />
      ))}
    </View>
  );
};

export default UploadScreen;
