// ActivityTextInput.js
import React from 'react';
import { Text, TextInput } from 'react-native';
import { Styles } from './Styles';

export default function MyTextInput({ label, value, onChangeText, keyboardType}) {
  function handleInput(value) {
    onChangeText(value)
  }
  console.log('enter value: ', value)
  
  return (
    <>
      <Text style={Styles.inputHeader}>{label}</Text>
      <TextInput value={value} onChangeText={handleInput} style={Styles.textInput} keyboardType={keyboardType}/>
    </>
  );
}
