import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import FirstScreen from '../screens/FirstScreen';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignupScreen';
import Profile from '../screens/ProfileScreen';
import Upload from '../screens/UploadScreen';
import Rank from '../screens/RankScreen';
import NewUpload from '../screens/NewUploadScreen.js';

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
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="upload"
          component={Upload}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="Rank"
          component={Rank}
          options={{headerShown: true, headerTitleAlign: 'center'}}
        />
        <Main.Screen
          name="Upload New"
          component={NewUpload}
          options={{headerShown: true, headerTitleAlign: 'center'}}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Main;
