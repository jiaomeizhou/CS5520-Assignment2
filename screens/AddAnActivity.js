import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useActivity } from '../components/ActivityContext';
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'
import MyTextInput from '../components/MyTextInput'
import { database } from "../firebase-files/firebaseSetup";
import { writeToDB } from "../firebase-files/firestoreHelper";

// This screen is used to add an activity to the list of activities
export default function AddAnActivity({ navigation }) {
  // Set the header options for this screen
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add An Activity",
      headerStyle: Styles.header,
      headerShown: true,
      headerTitleStyle: Styles.headerTitle,
    })
  })
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [items, setItems] = useState([
    { label: 'Walking', value: 'Walking' },
    { label: 'Running', value: 'Running' },
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ]);
  const [duration, setDuration] = useState(null);
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const { state, dispatch } = useActivity();
  const { activities } = state;

  // Handle the input for the activity name
  function handleActivityNameInput(name) {
    setName(name)
  }

  // Handle the input for the activity duration
  function handleActivityDurationInput(duration) {
    setDuration(duration)
  }

  // Handle the input for the activity date
  const handleActivityDateInput = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  // Check if the activity is a special activity
  const handleSpecialActivity = (name) => {
    if ((name === 'Running' || name === 'Weights') && duration > 60) {
      return true;
    } else {
      return false;
    }
  }

  // Validate the inputs
  function validateInputs() {
    if (!date || !name || !duration || isNaN(duration) || duration <= 0) {
      // alert('Invalid Input', 'Please check your input values.');
      Alert.alert('Invalid Input', 'Please check your input values.');
      return false;
    }
    return true;
  }

  // Save the activity to the context
  function handleSaveActivity() {
    console.log('save activity')
    if (!validateInputs()) {
      return;
    }
    const newActivity = {
      name: name,
      duration: duration,
      date: date,
      isSpecial: handleSpecialActivity(name),
    };

    // // Dispatch an action to save the activity to the context
    // dispatch({ type: 'SAVE_ACTIVITY', payload: newActivity });
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

  // Toggle the date time picker
  function toggleDateTimePicker() {
    if (!date) {
      setDate(new Date());
    }
    setShow(!show);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <Text style={Styles.inputHeader}>Activity *</Text>
        <DropDownPicker
          open={open}
          value={name}
          items={items}
          setOpen={setOpen}
          setValue={setName}
          setItems={setItems}
          placeholder='Select An Activity'
          onChangeValue={handleActivityNameInput}
          style={Styles.textInput}
        />
        <MyTextInput label="Duration (min) *" value={duration} onChangeText={handleActivityDurationInput} keyboardType={"numeric"} />
        <Text style={Styles.inputHeader}>Date *</Text>
        <TextInput value={date ? date.toDateString() : ''} onPressIn={toggleDateTimePicker} style={Styles.textInput} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date || new Date()}
            mode={mode}
            is24Hour={true}
            onChange={handleActivityDateInput}
            display="inline"
          />
        )}
        {!show && (
          <View style={Styles.buttonsView}>
            <Button title="Cancel" color={Colors.cancelResetColorRed} onPress={handleCancelActivity} />
            <Button title="Save" onPress={handleSaveActivity} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})