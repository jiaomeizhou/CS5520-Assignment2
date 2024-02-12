// AddActivityHeader.js
import React, { useEffect } from 'react';
import { Styles } from '../components/Styles';

export default function AddActivityHeader({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add An Activity",
      headerStyle: Styles.header,
      headerShown: true,
      headerTitleStyle: Styles.headerTitle,
    });
  }, [navigation]);

  return null;
}
