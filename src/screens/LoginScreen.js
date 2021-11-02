import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import React from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Yup from 'yup';
import Footer from '../common/Footer';
import Header from '../common/Header';
import {SERVER_API} from '../helper';
const LoginScreen = ({navigation}) => {
  const handleLogin = async (values, formikActions) => {
    try {
      const response = await fetch(`${SERVER_API}/auth/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      const {authToken, username, message} = data;
      await AsyncStorage.setItem('authToken', authToken);
      formikActions.setSubmitting(false);
      navigation.navigate('profile');
    } catch (error) {
      console.log(error);
      Alert.alert('Wrong Details', 'Details mismatch');
    }
  };
  // const handleLogout = async () => {
  //   setIsLoggedIn(false);
  //   setUserDetails({});
  // };
  const handleForgetPassword = async email => {
    try {
      if (email) {
        const response = await fetch(`${SERVER_API}/auth/forgot-password`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: email}),
        });
        const data = await response.json();
        if (data.message) {
          Alert.alert('Forget password ?', data.message);
        } else {
          Alert.alert('Error', data.error);
        }
      } else {
        Alert.alert('Forget password ?', `Enter Email first `);
      }
    } catch (error) {
      console.log('error');
      Alert.alert(
        'Error',
        `Error Occured while processing request .kindly request again `,
      );
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={Yup.object({
          email: Yup.string().email('Email is invalid').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, formikActions) =>
          handleLogin(values, formikActions)
        }>
        {props => (
          <>
            <View style={styles.container_block}>
              <Text style={styles.heading}>Log-in</Text>
              <View>
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
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  placeholder="password"
                  style={styles.input}
                  placeholderTextColor="black"
                />
                {props.touched.password && props.errors.password ? (
                  <Text style={styles.error}>{props.errors.password}</Text>
                ) : null}
                <Button
                  onPress={props.handleSubmit}
                  mode="contained"
                  loading={props.isSubmitting}
                  disabled={props.isSubmitting}
                  title="Submit"
                />
                {/* <Button
                onPress={props.handleReset}
                mode="outlined"
                disabled={props.isSubmitting}
                title="Reset"
              /> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingHorizontal: 20,
                  marginTop: 50,
                }}>
                <Button
                  title="Forget password"
                  onPress={() => handleForgetPassword(props.values.email)}
                />
                <Button
                  title="Sign-up"
                  onPress={() => navigation.navigate('signup')}
                />
              </View>
            </View>
          </>
        )}
      </Formik>

      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  container_block: {
    width: 270,
    // marginTop: 30,
  },
  input: {
    textAlign: 'center',
    marginVertical: 15,
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    color: 'black',
  },
  error: {
    color: 'red',
    fontSize: 14,
  },
});

export default LoginScreen;
