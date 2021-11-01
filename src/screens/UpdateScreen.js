import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SERVER, SERVER_API} from '../helper';
import {launchImageLibrary} from 'react-native-image-picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
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
const UpdateScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [profile, setProfile] = useState({
    name: null,
    email: null,
    age: null,
    phone: null,
    address: null,
  });
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      width: 300,
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    container_block: {
      width: 200,
      // marginTop: 30,
    },
    input: {
      textAlign: 'center',
      marginVertical: 5,
      backgroundColor: 'lightgrey',
      fontSize: 16,
      color: 'black',
    },
    error: {
      color: 'red',
      fontSize: 14,
    },
  });
  useEffect(async () => {
    try {
      const authToken = await AsyncStorage.getItem('authToken');
      const response = await fetch(
        `${SERVER_API}/auth/me?authToken=${authToken}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      if (data.profileImage) {
        console.log(data.profileImage);
        setPhoto({
          name: data.profileImage.fileName,
          type: data.profileImage.type,
          uri: `${SERVER}/${data.profileImage.fileName}`,
        });
      }
      setProfile({...data, phone: String(data.phone), age: String(data.age)});
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleChoosePhoto = () => {
    launchImageLibrary({noData: true}, response => {
      if (!response.didCancel) {
        setPhoto(response.assets[0]);
      }
    });
  };

  const handleUploadPhoto = async (values, formikActions) => {
    if (photo) {
      setProfile(values);
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        const response = await fetch(`${SERVER_API}/auth/update`, {
          method: 'POST',
          body: createFormData(photo, {authToken: authToken, ...values}),
        });
        const data = await response.json();
        console.log(data);
        formikActions.setSubmitting(false);
        if (data.success) {
          Alert.alert('Succes', 'Detail updated successfully');
          navigation.navigate('Home');
        } else {
          Alert.alert('Error3', 'Error in Updating Info');
        }
      } catch (error) {
        console.error(error);
        formikActions.setSubmitting(false);
        Alert.alert('Error', 'Error in Updating Info');
      }
    } else {
      Alert.alert('Important', 'Please select a photo');
    }
  };
  return (
    <View style={{marginHorizontal: 20, marginTop: 20}}>
      <Formik
        initialValues={profile}
        validationSchema={Yup.object({
          name: Yup.string().nullable().required('required'),
          email: Yup.string().email('Email is invalid').required('Required'),
          age: Yup.number().required('required'),
          phone: Yup.number().required('required'),
          address: Yup.string().required('required'),
        })}
        enableReinitialize={true}
        onSubmit={(values, formikActions) =>
          handleUploadPhoto(values, formikActions)
        }>
        {props => (
          <View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {!!photo ? (
                <Image
                  source={{uri: photo.uri}}
                  style={{
                    height: 150,
                    width: 150,
                    paddingHorizontal: 30,
                  }}
                />
              ) : (
                <Image
                  source={require('../images/user-profile.png')}
                  style={{
                    height: 150,
                    width: 150,
                    paddingHorizontal: 30,
                  }}
                />
              )}
              <TouchableOpacity
                onPress={handleChoosePhoto}
                style={{
                  backgroundColor: 'white',
                  padding: 10,
                  position: 'absolute',
                  bottom: 20,
                  left: 190,
                  borderRadius: 50,
                }}>
                <Image
                  source={require('../images/pencil.png')}
                  style={{
                    height: 20,
                    width: 20,
                  }}
                />
              </TouchableOpacity>
            </View>
            <TextInput
              onChangeText={props.handleChange('name')}
              onBlur={props.handleBlur('name')}
              value={props.values.name}
              placeholder="Name"
              style={styles.input}
              placeholderTextColor="black"
            />
            {props.touched.name && props.errors.name ? (
              <Text style={styles.error}>{props.errors.name}</Text>
            ) : null}
            <TextInput
              onChangeText={props.handleChange('email')}
              onBlur={props.handleBlur('email')}
              value={props.values.email}
              placeholder="Email Address"
              style={styles.input}
              placeholderTextColor="black"
            />
            {props.touched.email && props.errors.email ? (
              <Text style={styles.error}>{props.errors.email}</Text>
            ) : null}
            <TextInput
              onChangeText={props.handleChange('phone')}
              onBlur={props.handleBlur('phone')}
              value={props.values.phone}
              placeholder="Phone / Mobile No."
              keyboardType="numeric"
              style={styles.input}
              placeholderTextColor="black"
            />
            {props.touched.phone && props.errors.phone ? (
              <Text style={styles.error}>{props.errors.phone}</Text>
            ) : null}
            <TextInput
              onChangeText={props.handleChange('age')}
              onBlur={props.handleBlur('age')}
              value={props.values.age}
              style={styles.input}
              placeholder="Age"
              keyboardType="numeric"
              placeholderTextColor="black"
            />
            {props.touched.age && props.errors.age ? (
              <Text style={styles.error}>{props.errors.age}</Text>
            ) : null}

            <TextInput
              onChangeText={props.handleChange('address')}
              onBlur={props.handleBlur('address')}
              value={props.values.address}
              style={styles.input}
              placeholder="Localization"
              keyboardType="numeric"
              placeholderTextColor="black"
            />
            {props.touched.address && props.errors.address ? (
              <Text style={styles.error}>{props.errors.address}</Text>
            ) : null}

            <Button
              onPress={props.handleSubmit}
              mode="contained"
              loading={props.isSubmitting}
              disabled={props.isSubmitting}
              title="Update"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default UpdateScreen;
