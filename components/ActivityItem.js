import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Styles } from './Styles'
import * as Colors from './Color'

export default function ActivityItem({ activityObj }) {
    return (
        <View style={Styles.activityItem}>
            <Text style={Styles.activityText}>{activityObj.name}</Text>
            {activityObj.isSpecial && <Entypo name="warning" size={24} color={Colors.focusColorYellow} />}
            <View style={Styles.activityDateDurationContainer}>
                <Text style={Styles.activityDateDuration}>{activityObj.date ? activityObj.date.toDateString() : ''}</Text>
                <Text style={Styles.activityDateDuration}>{activityObj.duration} min</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})