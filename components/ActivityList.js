import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useActivity } from './ActivityContext';
import ActivityItem from './ActivityItem';
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "../firebase-files/firebaseSetup";

// This component shows a list of activities based on the current screen
export default function ActivityList({ currentScreen, navigation}) {
    // const { state } = useActivity();
    // const { activities } = state;
    const [activities, setAllActivities] = useState([]);
    const [specialActivities, setSpecialActivities] = useState([]);
    console.log("allActivities:", activities);

    useEffect(() => {
        // set up a listener to get the data from the database, only after the first time
        onSnapshot(collection(database, "activities"), (querySnapshot)=> {
            // console.log("querySnapshot", querySnapshot);
            const currentActivities = [];
            querySnapshot.forEach((doc)=>{
              console.log(doc.data());
              currentActivities.push({...doc.data(), id: doc.id});
            })
            setAllActivities(currentActivities);
        })
      },[])

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

    function navidateToEditActivity(activityObj) {
        navigation.navigate('EditActivity', { activityDetails: activityObj });
    }

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
                        <ActivityItem activityObj={item} onEdit={navidateToEditActivity}/>
                    )
                }}
            />
        </View>
    )
}