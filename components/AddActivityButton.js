import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import { Styles } from './Styles'
import * as Colors from './Color'

export default function AddActivityButton({ navigation }) {

  return (
    <View>
      <Button title="Add" onPress={() => navigation.navigate('AddAnActivity')} color={Colors.focusColorYellow} />
    </View>
  )
}

const styles = StyleSheet.create({})