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
import Header from '../common/Header';
import Footer from '../common/Footer';

const LoginScreen = ({navigation}) => {
  const [email, onChangeEmail] = useState('demo@gmail.com');
  const [password, onChangePassword] = useState('demo');

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
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter Password"
            secureTextEntry={true}
            placeholderTextColor="black"
          />
          <Text style={{color: 'red', textAlign: 'right'}}>
            *Password not correct
          </Text>
          <Button
            title="Log-in"
            onPress={() => {
              if (password && email) {
                if (email === 'demo@gmail.com' && password === 'demo') {
                  navigation.navigate('profile');
                } else {
                  Alert.alert(
                    'Test details',
                    'Email: demo@gmail.com and password: demo',
                  );
                }
              } else {
                Alert.alert(
                  'Enter Correct Detail',
                  "Email or Password Can't be Blank",
                );
              }
            }}
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
          onPress={() =>
            email
              ? Alert.alert(
                  'Forget password ?',
                  `Instruction for password reset sent to ${email}`,
                )
              : Alert.alert('Forget password ?', `Enter Email first `)
          }
        />
        <Button title="Sign-up" onPress={() => navigation.navigate('signup')} />
      </View>
      <Footer />
    </View>
  );
};
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
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 16,
    color: 'black',
  },
});

export default LoginScreen;
