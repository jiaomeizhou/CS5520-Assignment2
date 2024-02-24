import React, { useEffect } from 'react';
import { Styles } from '../components/Styles';

// This component is the header for the AddActivity screen
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
