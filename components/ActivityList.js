import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect} from 'react'
import { useActivity } from './ActivityContext';
import ActivityItem from './ActivityItem';

export default function ActivityList({}) {
    const { state } = useActivity();
    const { activities } = state;
    const [SpecialActivities, setSpecialActivities] = useState([]);
    console.log(activities);

    useEffect(() => {
        const getSpecialActivities = () => {
            const specialList = activities.filter(activity =>
                (activity.name === 'Running' || activity.name === 'Weights') && activity.duration > 60
            );
            setSpecialActivities(specialList);
        };

        getSpecialActivities();
    }, [activities]);

    return (
        <View>
            <FlatList
                data={activities}
                renderItem={({ item }) => {
                    return (
                        <ActivityItem activityObj={item} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})