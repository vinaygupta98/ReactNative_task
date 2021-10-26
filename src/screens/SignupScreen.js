import React, {useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  View,
} from 'react-native';
import Header from '../common/Header';
import Footer from '../common/Footer';
import RadioButton from '../components/RadioButton';

const SignupScreen = ({navigation}) => {
  const [data, setData] = useState({
    name: null,
    age: null,
    address: null,
    email: null,
    password: null,
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
  });
  const Options = [
    {
      title: 'Old age',
      key: 0,
    },
    {
      title: 'Young',
      key: 1,
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          height: 750,
          display: 'flex',
          alignItems: 'center',
        }}>
        <Header />
        <View style={styles.container}>
          <Text style={styles.heading}>Sign-up</Text>
          <RadioButton options={Options} />
          <TextInput
            style={styles.input}
            onChangeText={e => setData({...data, name: e})}
            value={data.name}
            placeholder="Name"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={e => setData({...data, age: e})}
            value={data.age}
            placeholder="Age"
            keyboardType="numeric"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={e => setData({...data, address: e})}
            value={data.address}
            placeholder="Localization"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={e => setData({...data, email: e})}
            value={data.email}
            placeholder="Email"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={e => setData({...data, password: e})}
            value={data.password}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="black"
          />
          <Text style={{color: 'red', textAlign: 'right'}}>
            *Password not correct
          </Text>

          <Text
            style={{color: 'blue', textAlign: 'right', marginVertical: 10}}
            onPress={() => navigation.navigate('login')}>
            Already have a Account ?
          </Text>
          <Button
            title="Sign Up"
            onPress={() => {
              if (
                data.email &&
                data.name &&
                data.password &&
                data.address &&
                data.age
              ) {
                navigation.navigate('profile');
              } else {
                Alert.alert(
                  'Enter Correct Detail',
                  "Any of the filed can't left blank ",
                );
              }
            }}
          />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default SignupScreen;
