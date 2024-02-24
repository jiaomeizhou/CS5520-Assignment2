import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'
import ActivityList from '../components/ActivityList'
import { Styles } from '../components/Styles'

// This screen shows all activities
export default function AllActivities({ navigation }) {

    // set header options for this screen
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
            {/* show all activities */}
            <ActivityList currentScreen={"AllActivities"} />
        </View>
    )
}