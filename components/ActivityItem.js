import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Styles } from './Styles'
import * as Colors from './Color'
import PressableItem from './PressableItem';

// This component is a single activity item with name, date, and duration
export default function ActivityItem({ activityObj, onEdit}) {
    // Convert Firebase Timestamp to JavaScript Date
    const date = activityObj.date ? activityObj.date.toDate() : null;

    function activityPressHandler() {
        onEdit(activityObj);
    }

    return (
        <PressableItem onPress={activityPressHandler}>
            <View style={Styles.activityItem}>
                <Text style={Styles.activityText}>{activityObj.name}</Text>
                {activityObj.isSpecial && <Entypo name="warning" size={24} color={Colors.focusColorYellow} />}
                <View style={Styles.activityDateDurationContainer}>
                    <Text style={Styles.activityDateDuration}>{date instanceof Date ? date.toDateString() : ''}</Text>
                    <Text style={Styles.activityDateDuration}>{activityObj.duration} min</Text>
                </View>
            </View>
        </PressableItem>
    )
}