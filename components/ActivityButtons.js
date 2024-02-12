// ActivityButtons.js
import React from 'react';
import { Button, View } from 'react-native';
import { Styles } from '../components/Styles';
import * as Colors from '../components/Color';

export default function ActivityButtons({ handleCancelActivity, handleSaveActivity }) {
  return (
    <View style={Styles.buttonsView}>
      <Button title="Cancel" color={Colors.cancelResetColorRed} onPress={handleCancelActivity} />
      <Button title="Save" onPress={handleSaveActivity} />
    </View>
  );
}
