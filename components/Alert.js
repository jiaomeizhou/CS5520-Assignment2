import React from 'react';
import { Alert, View, Text, TouchableOpacity } from 'react-native';

export default function AlertComponent({ title, message, onYes, onNo }) {
  const showAlert = () => {
    Alert.alert(
      title,
      message,
      [
        {
          text: 'No',
          style: 'cancel',
          onPress: onNo,
        },
        {
          text: 'Yes',
          onPress: onYes,
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={showAlert}>
        <View style={{ padding: 10, backgroundColor: 'red', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Show Alert</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
