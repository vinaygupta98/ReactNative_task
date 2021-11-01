import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FirstScreen from '../screens/FirstScreen';
import LoginScreen from '../screens/LoginScreen';
import Profile from './profile';
import SignUp from '../screens/SignupScreen';
import {View, Text, Image} from 'react-native';

const Main = () => {
  const Main = createStackNavigator();
  return (
    <NavigationContainer>
      <Main.Navigator initialRouteName="first">
        <Main.Screen
          name="first"
          component={FirstScreen}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Main;
