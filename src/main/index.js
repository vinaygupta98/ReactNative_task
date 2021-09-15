import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Menu from '../screens/stack/Menu';
import AgedCare from '../screens/stack/AgedCare';
import Pickup from '../screens/stack/Pickups';
import stack from '../screens/stack/index';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={AgedCare} /> */}
        <Tab.Screen name="Settings" component={Pickup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Main;
