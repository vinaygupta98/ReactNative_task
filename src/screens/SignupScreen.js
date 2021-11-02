import {Formik} from 'formik';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as Yup from 'yup';
import Footer from '../common/Footer';
import Header from '../common/Header';
import RadioButton from '../components/RadioButton';
import {SERVER_API} from '../helper';

const SignupScreen = ({navigation}) => {
  const Options = [
    {
      title: 'Old age',
      value: 'Old',
      key: 0,
    },
    {
      title: 'Young',
      value: 'Young',
      key: 1,
    },
  ];
  const [selected, setSelected] = useState(Options[0]);
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

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.heading}>Sign-up</Text>
          <RadioButton
            options={Options}
            selected={selected}
            setSelected={setSelected}
          />
          <Formik
            initialValues={{
              name: '',
              email: '',
              age: '',
              phone: '',
              address: '',
              password: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string().required('required'),
              email: Yup.string()
                .email('Email is invalid')
                .required('Required'),
              age: Yup.number().required('required'),
              phone: Yup.number().required('required'),
              address: Yup.string().required('required'),
              user_type: Yup.mixed().oneOf(['Old', 'Young']).default('Old'),
              password: Yup.string().required('required'),
            })}
            onSubmit={async (values, formikActions) => {
              try {
                const response = await fetch(`${SERVER_API}/auth/create`, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({...values, user_type: selected.value}),
                });
                const data = await response.json();
                if (data.success) {
                  Alert.alert(
                    'Success',
                    'Account Created Successfully!!.Kindly Login to use',
                  );
                  navigation.navigate('login');
                } else {
                  Alert.alert('Error', data.message);
                }
                formikActions.setSubmitting(false);
              } catch (error) {
                console.error(error);
                formikActions.setSubmitting(false);
              }
            }}>
            {props => (
              <View>
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
                  placeholderTextColor="black"
                />
                {props.touched.address && props.errors.address ? (
                  <Text style={styles.error}>{props.errors.address}</Text>
                ) : null}
                <TextInput
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  placeholder="password"
                  secureTextEntry
                  style={styles.input}
                  placeholderTextColor="black"
                />
                {props.touched.password && props.errors.password ? (
                  <Text style={styles.error}>{props.errors.password}</Text>
                ) : null}
                <Text style={{color: 'red', textAlign: 'right'}}>
                  *All Fields required
                </Text>
                <Text
                  style={{
                    color: 'blue',
                    textAlign: 'right',
                    marginVertical: 10,
                  }}
                  onPress={() => navigation.navigate('login')}>
                  Already have a Account ?
                </Text>
                <Button
                  title="Sign Up"
                  onPress={props.handleSubmit}
                  mode="contained"
                  loading={props.isSubmitting}
                  disabled={props.isSubmitting}
                />
              </View>
            )}
          </Formik>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
