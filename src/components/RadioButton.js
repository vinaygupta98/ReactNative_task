import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const RadioButton = ({options, selected, setSelected}) => {
  const styles = StyleSheet.create({
    content: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
    },
    container: {
      width: '75%',
      marginBottom: 15,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    radioText: {
      width: 150,
      fontSize: 16,
      color: '#000',
      fontWeight: '700',
    },
    radioCircle: {
      height: 15,
      width: 15,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: '#3740ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedRb: {
      width: 7.5,
      height: 7.5,
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
                setSelected(option);
              }}>
              {selected.key === option.key && (
                <View style={styles.selectedRb} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};
export default RadioButton;
