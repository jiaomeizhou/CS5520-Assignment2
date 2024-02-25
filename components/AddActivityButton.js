import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import * as Colors from './Color'
import { Ionicons } from '@expo/vector-icons';
import PressableButton from './PressableButton';

// This component is a button to navigate to AddAnActivity screen
export default function AddActivityButton({ navigation }) {

  return (
    <View>
      <PressableButton onPress={() => navigation.navigate('AddAnActivity')} >
        <Ionicons name="add" size={24} color={Colors.primaryWhiteColor}/>
      </PressableButton>
      {/* <Button title="Add" onPress={() => navigation.navigate('AddAnActivity')} color={Colors.focusColorYellow} /> */}
    </View>
  )
}

const styles = StyleSheet.create({})