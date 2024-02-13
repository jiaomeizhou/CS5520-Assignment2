import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useActivity } from './ActivityContext';
import ActivityItem from './ActivityItem';

// This component shows a list of activities based on the current screen
export default function ActivityList({ currentScreen }) {
    const { state } = useActivity();
    const { activities } = state;
    const [specialActivities, setSpecialActivities] = useState([]);
    console.log("activities:", activities);

    // get special activities
    useEffect(() => {
        const getSpecialActivities = () => {
            const specialList = activities.filter(activity =>
                activity.isSpecial === true
            );
            setSpecialActivities(specialList);
        };

        getSpecialActivities();
    }, [activities]);

    console.log('currentScreen', currentScreen);
    console.log('specialActivities', specialActivities);

    return (
        <View >
            {/* show activities based on the current screen */}
            <FlatList
                data={
                    currentScreen === 'SpecialActivities'
                        ? specialActivities
                        : activities
                }
                renderItem={({ item }) => {
                    return (
                        <ActivityItem activityObj={item} />
                    )
                }}
            />
        </View>
    )
}