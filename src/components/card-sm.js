import React from 'react';
import {View, Text, Image} from 'react-native';
import {SERVER} from '../helper';
const CardSm = ({profileImage, name, totalposts, totalLikes}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: 350,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 5,
      }}>
      {!!profileImage ? (
        <Image
          source={{uri: `${SERVER}/${profileImage.fileName}`}}
          style={{
            width: 70,
            height: 70,
          }}
        />
      ) : (
        <Image
          source={require('../images/user-profile.png')}
          style={{
            width: 70,
            height: 70,
          }}
        />
      )}
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
            {totalLikes}
          </Text>
          <Image
            source={require('../images/heart.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
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
            {totalposts}
          </Text>
          <Image
            source={require('../images/image.png')}
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
