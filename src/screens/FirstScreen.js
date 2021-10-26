import React, {useRef, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  useWindowDimensions,
  Button,
} from 'react-native';
import slides from '../dummy/Slides';

const FirstScreen = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} />
      <FlatList
        data={slides}
        renderItem={({item}) => (
          <Image
            source={item.image}
            style={{
              height: 450,
              width: 400,
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id.toString()}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 10,
        }}>
        <View style={styles.content}>
          <Image
            source={require('../images/user.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text
            style={styles.button}
            onPress={() => {
              navigation.navigate('login');
            }}>
            Login/Signup
          </Text>
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../images/phone-call.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text style={styles.phone}>0749728855</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    padding: 20,
    marginRight: 2,
  },
  button: {
    fontSize: 20,
    paddingLeft: 5,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  phone: {
    paddingLeft: 5,
    fontSize: 20,
  },
});

export default FirstScreen;
