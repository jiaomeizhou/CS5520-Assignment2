import React from 'react';
import { Alert } from 'react-native';
import { updateDB } from '../firebase-files/firestoreHelper';
import ActivityForm from '../components/ActivityForm';

export default function EditActivity({ route, navigation }) {
    const { activityDetails } = route.params;
    console.log("activityDetails", activityDetails)

    function isSpecialActivity(name, duration) {
        return (name === 'Running' || name === 'Weights') && duration > 60;
    }

    const handleSaveActivity = (updatedActivity) => {
        // TODO: when the activity is updated, check if it is a special activity
        // updatedActivity.isSpecial = handleSpecialActivity(updatedActivity.name, updatedActivity.duration);
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
                    onPress: () => { updateDB(activityDetails.id, updatedActivity), navigation.goBack() },
                },
            ],
            { cancelable: false }
        );
    };

    const handleCancelActivity = () => {
        navigation.goBack();
    };

    return (
        <ActivityForm title="Edit" onSubmit={handleSaveActivity} onCancel={handleCancelActivity} initialValues={activityDetails} navigation={navigation} />
    );
}
