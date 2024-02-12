// ActivityButtons.js
import React from 'react';
import { Button, View } from 'react-native';
import { Styles } from '../components/Styles';

export default function ActivityButtons({ handleCancelActivity, handleSaveActivity }) {
  return (
    <View style={Styles.buttonsView}>
      <Button title="Cancel" color="red" onPress={handleCancelActivity} />
      <Button title="Save" onPress={handleSaveActivity} />
    </View>
  );
}
