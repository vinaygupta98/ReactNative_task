import React from 'react';
import {View, Text, Image} from 'react-native';
import {SERVER, ShortFormatDate} from '../helper';

const Card2 = ({fileName, uploadpath, likes, tag, createdAt}) => {
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
        source={{uri: `${SERVER}/${fileName}`}}
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
              {likes}
            </Text>
            <Image
              source={require('../images/heart.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <Text>{ShortFormatDate(createdAt)}</Text>
        </View>
        <View>
          <Text>{tag}</Text>
          {/* <Text>{location}</Text> */}
        </View>
      </View>
    </View>
  );
};

export default Card2;
