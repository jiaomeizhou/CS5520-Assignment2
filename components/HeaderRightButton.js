import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import * as Colors from './Color'
import { Ionicons } from '@expo/vector-icons';
import PressableButton from './PressableButton';
import { Styles } from './Styles'
import { AntDesign } from '@expo/vector-icons';

// This component is a button to navigate to AddAnActivity screen
export default function HeaderRightButton({ navigation, onPress, title}) {

  return (
    <PressableButton customButtonStyle={Styles.headerButton} onPress={onPress} >
      {title === "add" && <Ionicons name="add" size={24} color={Colors.primaryWhiteColor} />}
      {title === "edit" && <AntDesign name="delete" size={24} color={Colors.primaryWhiteColor} />}
    </PressableButton>
  )
}

const styles = StyleSheet.create({})