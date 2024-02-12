// ActivityTextInput.js
import React from 'react';
import { Text, TextInput } from 'react-native';
import { Styles } from './Styles';

export default function ActivityTextInput({ label, value, onChangeText }) {
  function handleInput(value) {
    onChangeText(value)
  }
  console.log('enter value: ', value)
  
  return (
    <>
      <Text style={Styles.inputHeader}>{label}</Text>
      <TextInput value={value} onChangeText={handleInput} style={Styles.textInput} />
    </>
  );
}
