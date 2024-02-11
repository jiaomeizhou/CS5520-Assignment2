import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'
import ActivityList from '../components/ActivityList'
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'

export default function SpecialActivities({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <AddActivityButton navigation={navigation} />
            },
            headerTitle: "Special Activities",
            headerStyle: Styles.header,
            headerShown: true,
            headerTitile: "Special Activities",
            headerTitleStyle: Styles.headerTitle,
        })
    })
    return (
        <View>
            <ActivityList currentScreen={"SpecialActivities"} />
        </View>
    )
}

const styles = StyleSheet.create({})