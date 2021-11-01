import {View, Image, StyleSheet, Text, useColorScheme} from 'react-native';
import React from 'react';
const Footer = () => {
  const styles = StyleSheet.create({
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      width: '100%',
      left: 0,
      right: 0,
      bottom: 0,
      paddingTop: 20,
      paddingHorizontal: 30,
    },
    contact_us: {
      fontWeight: 'bold',
    },
    social: {
      padding: 1,
    },
    text: {
      fontWeight: '700',
      textAlign: 'left',
    },
    social_icon: {
      height: 30,
      width: 30,
    },
  });
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.footer}>
      <View style={styles.contact_us}>
        <Text style={styles.text}>Contact-us</Text>
        <Text style={styles.text}>0749128855</Text>
        <Text style={styles.text}>enquiries@gcla.com.au</Text>
      </View>
      <View style={styles.social}>
        <Text></Text>
        <Image
          style={styles.social_icon}
          source={require('../images/instagram.png')}
        />
        <Image
          style={styles.social_icon}
          source={require('../images/facebook.png')}
        />
      </View>
    </View>
  );
};

export default Footer;
