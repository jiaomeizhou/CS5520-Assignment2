import React from 'react';
import { Alert } from 'react-native';
import { updateDB } from '../firebase-files/firestoreHelper';
import ActivityForm from '../components/ActivityForm';

// This screen is used to edit and update an activity
export default function EditActivity({ route, navigation }) {
    // get the activity details from the route
    const { activityDetails } = route.params;
    // console.log("activityDetails", activityDetails)

    // Check if the activity is special
    function isSpecialActivity(name, duration) {
        return (name === 'Running' || name === 'Weights') && duration > 60;
    }

    // Save the activity to the database
    // when the user clicks on the save button, alert the user to confirm the changes
    const handleSaveActivity = (updatedActivity) => {
        if (updatedActivity.isSpecial && !isSpecialActivity(updatedActivity.name, updatedActivity.duration)) {
            updatedActivity.isSpecial = false;
        }

        Alert.alert(
            "Impotant",
            "Are you sure you want to save these changes?",
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    // if the user clicks on yes, update the activity in the database and navigate to the previous screen
                    onPress: () => { updateDB(activityDetails.id, updatedActivity), navigation.goBack() },
                },
            ],
            { cancelable: false }
        );
    };

    // Cancel the activity and navigate to the previous screen
    const handleCancelActivity = () => {
        navigation.goBack();
    };

    return (
        <ActivityForm title="Edit" onSubmit={handleSaveActivity} onCancel={handleCancelActivity} initialValues={activityDetails} navigation={navigation} />
    );
}
