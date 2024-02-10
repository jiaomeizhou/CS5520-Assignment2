import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect } from 'react'
import AddActivityButton from '../components/AddActivityButton'
import ActivityList from '../components/ActivityList'

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
            <ActivityList />
        </View>
    )
}

const styles = StyleSheet.create({})