import React from 'react';
import { Alert } from 'react-native';
import { updateDB } from '../firebase-files/firestoreHelper';
import ActivityForm from '../components/ActivityForm';

export default function EditActivity({ route, navigation }) {
    const { activityDetails } = route.params;
    console.log("activityDetails", activityDetails)

    function handleSpecialActivity(name, duration) {
        return (name === 'Running' || name === 'Weights') && duration > 60;
    }

    const handleSaveActivity = (updatedActivity) => {
        // updatedActivity.isSpecial = activityDetails.isSpecial; // Preserve isSpecial value
        updatedActivity.isSpecial = handleSpecialActivity(updatedActivity.name, updatedActivity.duration);
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
