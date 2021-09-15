import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import RadioButton from '../../components/RadioButton';

const SignUp = ({navigation}) => {
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
      marginVertical: 10,
      backgroundColor: 'lightgreen',
      fontSize: 16,
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
    <View
      style={{
        height: '100%',
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
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setData({...data, age: e})}
          value={data.age}
          placeholder="Age"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setData({...data, address: e})}
          value={data.address}
          placeholder="Localization"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setData({...data, email: e})}
          value={data.email}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={e => setData({...data, password: e})}
          value={data.password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text style={{color: 'red', textAlign: 'right'}}>
          *Password not correct
        </Text>

        <Button
          title="Already have a Account ?"
          onPress={() => navigation.navigate('login')}
        />
      </View>
      <Footer />
    </View>
  );
};

export default SignUp;
