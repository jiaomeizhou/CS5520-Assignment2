import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'
import ActivityList from '../components/ActivityList'
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'

export default function AllActivities({ navigation }) {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <AddActivityButton navigation={navigation} />
            },
            headerTitle: "All Activities",
            headerStyle: Styles.header,
            headerShown: true,
            headerTitleStyle: Styles.headerTitle,
        })
    })

    return (
        <View>
            <ActivityList currentScreen={"AllActivities"} />
        </View>
    )
}

const styles = StyleSheet.create({})