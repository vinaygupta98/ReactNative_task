import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import RadioButton from '../../components/RadioButton';
import Header from '../../common/Header';
const AgedCare = () => {
  const Options = [
    {
      title: 'Aged Care',
      key: 0,
      icon: 'star',
    },
    {
      title: 'Agua Fit',
      key: 1,
      icon: 'heart',
    },
    {
      title: 'RnR',
      key: 2,
      icon: 'dot',
    },
  ];

  return (
    <View
      style={{
        display: 'flex',
        height: '100%',
        alignItems: 'center',
      }}>
      <Header />
      <View
        style={{
          width: 300,
          height: 400,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 20,
            textAlign: 'center',
            paddingVertical: 30,
            marginBottom: 100,
            backgroundColor: 'lightgreen',
          }}>
          Aged Care
        </Text>
        <RadioButton options={Options} />
        <Button
          title="Book Appointment"
          accessibilityLabel="Book Appointmnet"
          onPress={() => {
            Alert.alert('Booked');
          }}
        />
      </View>
    </View>
  );
};

export default AgedCare;
