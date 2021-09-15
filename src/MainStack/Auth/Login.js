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

const Login = ({navigation}) => {
  const [email, onChangeEmail] = useState('demo@demo.gmail.com');
  const [password, onChangePassword] = useState('demo');

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      // justifyContent: 'flex-start',
    },
    heading: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 30,
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
  return (
    <View
      style={{height: '100%', display: 'flex', justifyContent: 'space-around'}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.container_block}>
          <Text style={styles.heading}>Log-in</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Enter Email"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter Password"
          />
          <Text style={{color: 'red', textAlign: 'right'}}>
            *Password not correct
          </Text>
          <Button
            title="Log-in"
            onPress={() => navigation.navigate('service')}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 100,
        }}>
        <Button
          title="Forget password"
          onPress={() => Alert.alert('Forget password Clicked')}
        />
        <Button title="Sign-up" onPress={() => navigation.navigate('signup')} />
      </View>
      <Footer />
    </View>
  );
};

export default Login;
