import React from 'react';
import {Image, View, Text, TextInput, Button} from 'react-native';

const NewUploadScreen = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'grey',
          width: 360,
          marginTop: 10,
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../images/image.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        <Text>My tag </Text>
        <TextInput
          style={{
            borderWidth: 1,
            fontSize: 20,
            paddingHorizontal: 40,
          }}
          placeholder="Hi , everyone"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        <Button title="Submit" />
        <Button title="Cancel" />
      </View>
    </View>
  );
};

export default NewUploadScreen;
