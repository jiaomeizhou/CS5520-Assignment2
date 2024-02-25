import React from 'react';
import { Alert } from 'react-native';
import { updateDB } from '../firebase-files/firestoreHelper';
import ActivityForm from '../components/ActivityForm';

export default function EditActivity({ route, navigation }) {
    const { activityDetails } = route.params;

    const handleSaveActivity = (updatedActivity) => {
        updatedActivity.isSpecial = activityDetails.isSpecial; // Preserve isSpecial value

        Alert.alert(
            "Impotant",
            "Are you sure you want to update this activity?",
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    onPress: () => {updateDB(activityDetails.id, updatedActivity), navigation.goBack()},
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
