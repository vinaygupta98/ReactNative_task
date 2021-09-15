import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../MainStack/Auth/Login';
import SignUp from '../MainStack/Auth/SignUp';
import Services from '../MainStack/Main/Services';
import AgedCare from '../MainStack/Main/AgedCare';
import Menu from '../MainStack/Main/Menu';
import Pickups from '../MainStack/Main/Pickups';
const MainStack = () => {
  const Main = createStackNavigator();
  return (
    <NavigationContainer>
      <Main.Navigator>
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
          name="service"
          component={Services}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="aged_care"
          component={AgedCare}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="community_hub"
          component={Menu}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="port_cutris"
          component={Pickups}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="aqua_fit"
          component={Login}
          options={{headerShown: false}}
        />
        <Main.Screen
          name="ground_control"
          component={Login}
          options={{headerShown: false}}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
