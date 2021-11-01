import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/ProfileScreen';
import RankScreen from '../screens/RankScreen';
import UploadNewScreen from '../screens/UploadNewScreen';
import MyUploadScreen from '../screens/MyUploadScreen';
import UpdateScreen from '../screens/UpdateScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function Profile({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              onPress={() => props.navigation.navigate('login')}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Rank"
        component={RankScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="Upload New"
        component={UploadNewScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="My Upload"
        component={MyUploadScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Drawer.Screen
        name="Update"
        component={UpdateScreen}
        options={{headerTitleAlign: 'center'}}
      />
    </Drawer.Navigator>
  );
}
