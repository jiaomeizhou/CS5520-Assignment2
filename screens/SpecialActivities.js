import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'
import ActivityList from '../components/ActivityList'

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
            <ActivityList currentScreen={"SpecialActivities"} />
        </View>
    )
}

const styles = StyleSheet.create({})