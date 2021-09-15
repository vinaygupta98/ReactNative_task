import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const RadioButton = ({options}) => {
  const [selected, setSelected] = useState(null);
  const styles = StyleSheet.create({
    content: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    container: {
      maxWidth: 350,
      marginBottom: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    radioText: {
      width: 150,
      fontSize: 20,
      color: '#000',
      fontWeight: '700',
    },
    radioCircle: {
      height: 30,
      width: 30,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#3740ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedRb: {
      width: 15,
      height: 15,
      borderRadius: 50,
      backgroundColor: '#3740ff',
    },
    result: {
      marginTop: 20,
      color: 'white',
      fontWeight: '600',
      backgroundColor: '#F3FBFE',
    },
  });
  return (
    <View style={styles.content}>
      {options.map(option => {
        return (
          <View key={option.key} style={styles.container}>
            <Text style={styles.radioText}>{option.title}</Text>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                setSelected(option.key);
              }}>
              {selected === option.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default RadioButton;
