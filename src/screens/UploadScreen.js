import React from 'react';
import {View} from 'react-native';
import Collection from '../dummy/Collection';
import Card2 from '../components/Card-2';
const UploadScreen = () => {
  return (
    <View>
      {Collection.map((col, i) => (
        <Card2 key={i} {...col} />
      ))}
    </View>
  );
};

export default UploadScreen;
