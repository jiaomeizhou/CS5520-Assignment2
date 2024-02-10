import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActivityItem({ activityObj }) {
    return (
        <View>
            <Text>{activityObj.name}</Text>
            <Text>{activityObj.type}</Text>
            <Text>{activityObj.date ? activityObj.date.toDateString() : ''}</Text>
            <Text>{activityObj.duration}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})