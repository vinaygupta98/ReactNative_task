import React, {useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import RadioButton from '../../components/RadioButton';
import Header from '../../common/Header';
import DatePicker from 'react-native-datepicker';
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
  const [date, setDate] = useState(null);

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
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 20,
            textAlign: 'center',
            paddingVertical: 30,
            marginBottom: 100,
          }}>
          Aged Care
        </Text>
        <RadioButton options={Options} />
        <DatePicker
          style={{
            width: 250,
            marginVertical: 25,
          }}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          //   customStyles={{
          //     dateIcon: {
          //       position: 'absolute',
          //       left: 0,
          //       top: 4,
          //       marginLeft: 0,
          //     },
          //     dateInput: {
          //       marginLeft: 36,
          //     },
          //   }}
          showIcon={false}
          onDateChange={setDate}
        />
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
