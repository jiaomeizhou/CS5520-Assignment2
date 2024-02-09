import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'

export default function AllActivities({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <AddActivityButton navigation={navigation} />
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