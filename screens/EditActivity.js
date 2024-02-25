import React from 'react';
import { updateDB } from '../firebase-files/firestoreHelper';
import ActivityForm from '../components/ActivityForm';

export default function EditActivity({ route, navigation }) {
  const { activityDetails } = route.params;

  const handleSaveActivity = (updatedActivity) => {
    updatedActivity.isSpecial = activityDetails.isSpecial; // Preserve isSpecial value
    updateDB(activityDetails.id, updatedActivity);
    Alert.alert('Success', 'Activity updated successfully.');
    navigation.goBack();
  };

  const handleCancelActivity = () => {
    navigation.goBack();
  };

  return (
    <ActivityForm title="Edit" onSubmit={handleSaveActivity} onCancel={handleCancelActivity} initialValues={activityDetails} />
  );
}
