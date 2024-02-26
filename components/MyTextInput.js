import React from 'react';
import { Text, TextInput } from 'react-native';
import { Styles } from './Styles';
import PressableItem from './PressableItem';

// This component is a text input with a label displayed above it
export default function MyTextInput({ label, value, onChangeText, keyboardType }) {
  function handleInput(value) {
    onChangeText(value)
  }
  console.log('enter value: ', value)

  return (
    <>
      <Text style={Styles.inputHeader}>{label}</Text>
      <PressableItem>
        <TextInput value={value} onChangeText={handleInput} style={Styles.textInput} keyboardType={keyboardType} />
      </PressableItem>
    </>
  );
}
