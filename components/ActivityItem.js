import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function ActivityItem({ activityObj }) {
    return (
        <View>
            <Text>{activityObj.name}</Text>
            {activityObj.isSpecial && <Entypo name="warning" size={24} color="black" />}
            <Text>{activityObj.date ? activityObj.date.toDateString() : ''}</Text>
            <Text>{activityObj.duration}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})