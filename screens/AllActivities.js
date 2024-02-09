import { StyleSheet, Text, View, Button} from 'react-native'
import React, { useEffect } from 'react'

export default function AllActivities({ navigation}) {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Button title="Add" onPress={() => navigation.navigate('AddAnActivity')} />
            }
        })
    })

  return (
    <View>
      <Text>AllActivities</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({})