import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import * as Colors from './Color'

// This component is a button to navigate to AddAnActivity screen
export default function AddActivityButton({ navigation }) {

  return (
    <View>
      <Button title="Add" onPress={() => navigation.navigate('AddAnActivity')} color={Colors.focusColorYellow} />
    </View>
  )
}

const styles = StyleSheet.create({})