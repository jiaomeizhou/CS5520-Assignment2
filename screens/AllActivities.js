import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import HeaderRightButton from '../components/HeaderRightButton'
import ActivityList from '../components/ActivityList'
import { Styles } from '../components/Styles'

// This screen shows all activities
export default function AllActivities({ navigation }) {

    function handlePressAddAnActivity() {
        navigation.navigate('AddAnActivity')
    }

    // set header options for this screen
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderRightButton navigation={navigation} onPress={handlePressAddAnActivity} title="add"/>
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
            <ActivityList currentScreen={"AllActivities"} navigation={navigation}/>
        </View>
    )
}