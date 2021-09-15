import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Card = ({title, link}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)}>
      <View style={{margin: 15}}>
        <View
          style={{
            borderWidth: 3,
            borderColor: 'black',
            width: 75,
            height: 75,
            borderRadius: 5,
          }}>
          <Image
            source={require('../images/logo.png')}
            style={{width: 75, height: 75}}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            marginTop: 8,
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
