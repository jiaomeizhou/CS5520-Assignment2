import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderRightButton from '../components/HeaderRightButton'
import ActivityList from '../components/ActivityList'
import { Styles } from '../components/Styles'

// This screen shows all special activities, 
// A special activity is Running or Weight Training and the duration is more than 60 min.
export default function SpecialActivities({ navigation }) {
    // set header options for this screen
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderRightButton navigation={navigation} onPress={() => navigation.navigate('AddAnActivity')} title="add" />
            },
            headerTitle: "Special Activities",
            headerStyle: Styles.header,
            headerShown: true,
            headerTitleStyle: Styles.headerTitle,
        })
    })

    return (
        <View>
            {/* show all special activities */}
            <ActivityList currentScreen={"SpecialActivities"} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({})