import { StyleSheet } from 'react-native'
import React from 'react'
import { writeToDB } from "../firebase-files/firestoreHelper";
import ActivityForm from '../components/ActivityForm';

// This screen is used to add an activity to the list of activities
export default function AddAnActivity({ navigation }) {

  function handleSpecialActivity(name, duration) {
    return (name === 'Running' || name === 'Weights') && duration > 60;
  }

  // Save the activity to the context
  function handleSaveActivity(newActivity) {
    console.log("newActivity", newActivity)
    newActivity.isSpecial = handleSpecialActivity(newActivity.name, newActivity.duration);
    writeToDB(newActivity);
    // Navigate to the previous screen
    navigation.goBack();
  }

  // Cancel the activity and navigate to the previous screen
  function handleCancelActivity() {
    console.log('cancel activity')
    setName(null)
    setDuration(null)
    setDate(new Date())
    navigation.goBack();
  }

  return (
    <ActivityForm title="Add An Activity" onSubmit={handleSaveActivity} onCancel={handleCancelActivity} initialValues={{}} navigation={navigation} />
  )
}

const styles = StyleSheet.create({})