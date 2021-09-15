import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  DatePickerAndroid,
  DatePickerIOS,
} from 'react-native';
import Header from '../../common/Header';
import DatePicker from 'react-native-datepicker';

const Pickups = () => {
  const [data, setFormData] = React.useState({
    name: null,
    address: null,
    disability: null,
    age: null,
    proof: null,
    date: null,
  });
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Header />
      <Text
        style={{
          textAlign: 'center',
          width: '90%',
          fontSize: 20,
          fontWeight: '700',
          paddingVertical: 10,
          backgroundColor: 'lightgreen',
        }}>
        Pickups
      </Text>
      <Text style={{color: 'red', fontSize: 18}}>* Only for Old aged</Text>
      <View style={{width: 250, marginVertical: 20}}>
        <TextInput
          style={{
            textAlign: 'center',
            marginVertical: 5,
            backgroundColor: 'lightgreen',
            paddingVertical: 5,
            fontWeight: '700',
          }}
          onChangeText={e => setFormData({name: e})}
          value={data.name}
          placeholder="Name"
        />
        <TextInput
          style={{
            textAlign: 'center',
            marginVertical: 5,
            backgroundColor: 'lightgreen',
            paddingVertical: 5,
            fontWeight: '700',
          }}
          onChangeText={e => setFormData({address: e})}
          value={data.address}
          placeholder="Address"
        />
        <TextInput
          style={{
            textAlign: 'center',
            marginVertical: 5,
            backgroundColor: 'lightgreen',
            paddingVertical: 5,
            fontWeight: '700',
          }}
          onChangeText={e => setFormData({disability: e})}
          value={data.disability}
          placeholder="Disability"
        />
        <TextInput
          style={{
            textAlign: 'center',
            marginVertical: 5,
            backgroundColor: 'lightgreen',
            paddingVertical: 5,
            fontWeight: '700',
          }}
          onChangeText={e => setFormData({age: e})}
          value={data.age}
          placeholder="age"
          keyboardType="numeric"
        />
        <TextInput
          style={{
            textAlign: 'center',
            marginVertical: 5,
            backgroundColor: 'lightgreen',
            paddingVertical: 5,
            fontWeight: '700',
          }}
          onChangeText={e => setFormData({proof: e})}
          value={data.proof}
          placeholder="Legal proof as ad"
        />
        <DatePicker
          style={{width: 250, marginVertical: 5, backgroundColor: 'lightgreen'}}
          date={data.date}
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
          onDateChange={date => {
            setFormData({date: date});
          }}
        />
      </View>
      <Button
        title="Book"
        onPress={() => {}}
        accessibilityLabel="Book a pickup"
      />
    </View>
  );
};

export default Pickups;
