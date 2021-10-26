import React from 'react';
import {View, Text, Image} from 'react-native';
const CardSm = ({image, likeCount, name}) => {
  return (
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
          <Text
            style={{
              fontSize: 20,
            }}>
            {name}
          </Text>
        </View>
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
      </View>
    </View>
  );
};

export default CardSm;
