import {View, Image, StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';
const Header = () => {
  const styles = StyleSheet.create({
    header: {
      height: 120,
      display: 'flex',
      alignSelf: 'center',
    },
    logo: {
      height: 120,
    },
    text: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
    </View>
  );
};

export default Header;
