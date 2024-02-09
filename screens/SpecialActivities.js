import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'

export default function SpecialActivities({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <AddActivityButton navigation={navigation} />
            }
        })
    })
    return (
        <View>
            <Text>SpecialActivities</Text>
        </View>
    )
}

const styles = StyleSheet.create({})