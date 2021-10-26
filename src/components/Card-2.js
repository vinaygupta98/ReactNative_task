import React from 'react';
import {View, Text, Image} from 'react-native';

const Card2 = ({image, likeCount, date, location}) => (
  <View
    style={{
      flexDirection: 'row',
      width: 350,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      paddingVertical: 5,
    }}>
    <Image
      source={image}
      style={{
        width: 70,
        height: 70,
      }}
    />
    <View
      style={{
        paddingHorizontal: 30,
        flexGrow: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontSize: 24,
              paddingRight: 5,
            }}>
            {likeCount}
          </Text>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
        </View>
        <Text>{date}</Text>
      </View>
      <View>
        <Text>{location}</Text>
      </View>
    </View>
  </View>
);

export default Card2;
