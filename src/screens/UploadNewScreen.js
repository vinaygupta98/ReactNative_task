import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Image,
  Button,
  Platform,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import {SERVER_API} from '../helper';

const createFormData = (photo, body = {}) => {
  const data = new FormData();
  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

const UploadNewScreen = ({navigation}) => {
  const [photo, setPhoto] = React.useState(null);
  const [tag, setTag] = React.useState(null);

  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (!response.didCancel) {
        setPhoto(response.assets[0]);
      }
    });
  };

  const handleUploadPhoto = async () => {
    if (photo) {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        const response = await fetch(`${SERVER_API}/post`, {
          method: 'POST',
          body: createFormData(photo, {
            authToken: authToken,
            tag: tag,
          }),
        });
        const data = await response.json();
        if (data.success) {
          Alert.alert('Succes', 'Image Posted Successfully');
          setPhoto(null);
          setTag(null);
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Error in Uploading Post');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      Alert.alert('Important', 'Please select a photo');
    }
  };
  return (
    <View
      style={{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {photo ? (
        <>
          <Image source={{uri: photo.uri}} style={{width: 320, height: 350}} />
        </>
      ) : (
        <TouchableOpacity onPress={handleChoosePhoto}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              width: 320,
              height: 350,
              marginTop: 10,
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
        </TouchableOpacity>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 18, marginRight: 20}}>My tag </Text>
        <TextInput
          style={{
            borderWidth: 1,
            fontSize: 18,
            paddingHorizontal: 15,
            width: 200,
          }}
          value={tag}
          onChangeText={setTag}
          placeholder="Hi , everyone"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          marginVertical: 20,
          paddingHorizontal: 60,
        }}>
        <Button
          title="Cancel"
          onPress={() => {
            setTag(null);
            setPhoto(null);
          }}
        />
        <Button title="Submit" onPress={handleUploadPhoto} />
      </View>
    </View>
  );
};

export default UploadNewScreen;
