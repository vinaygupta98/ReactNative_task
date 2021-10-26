import React from 'react';
import {View, Text} from 'react-native';
import Collection from '../dummy/Collection';
import Uploaders from '../dummy/Uploader';

import Card2 from '../components/Card-2';
import Cardsm from '../components/card-sm.js';
import {ScrollView} from 'react-native-gesture-handler';
const RankScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: 'flex-start',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 10,
            paddingVertical: 10,
            paddingTop: 30,
          }}>
          Top 5 Likes
        </Text>
        {Collection.map((col, i) =>
          i < 5 ? <Card2 key={i} {...col} /> : null,
        )}
        <Text
          style={{
            fontSize: 24,
            paddingLeft: 10,
            paddingVertical: 10,
            paddingTop: 30,
          }}>
          Top 5 Uploader
        </Text>
        {Uploaders.map((col, i) =>
          i < 5 ? <Cardsm key={i} {...col} /> : null,
        )}
      </View>
    </ScrollView>
  );
};

export default RankScreen;
