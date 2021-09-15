import React from 'react';
import {View, Text} from 'react-native';

const Menu = () => {
  const Options = [
    {title: 'Profile', link: '/profile'},
    {title: 'Services', link: '/services'},
    {title: 'Themes', link: '/themes'},
    {title: 'Guidelines', link: '/guidelines'},
    {title: 'Appointments', link: '/appointment'},
    {title: 'Pickups', link: '/pickups'},
  ];
  return (
    <View style={{display: 'flex', justifyContent: 'center', marginTop: 50}}>
      {Options.map((option, i) => (
        <Text
          key={i}
          style={{
            backgroundColor: 'lightgreen',
            fontSize: 24,
            fontWeight: '700',
            textAlign: 'center',
            paddingVertical: 10,
            margin: 10,
          }}>
          {option.title}
        </Text>
      ))}
    </View>
  );
};

export default Menu;
