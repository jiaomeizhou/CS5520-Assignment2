import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useActivity } from '../components/ActivityContext';
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'
import MyTextInput from '../components/MyTextInput'

export default function AddAnActivity({ navigation }) {
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
  const [isSpecial, setIsSpecial] = useState(false);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const { state, dispatch } = useActivity();
  const { activities } = state;

  function handleActivityNameInput(name) {
    setName(name)
  }

  function handleActivityDurationInput(duration) {
    setDuration(duration)
  }

  const handleActivityDateInput = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const handleSpecialActivity = (name) => {
    if ((name === 'Running' || name === 'Weights') && duration > 60) {
      return true;
    } else {
      return false;
    }
  }

  function validateInputs() {
    if (!name || !duration || isNaN(duration) || duration < 0) {
      alert('Please enter valid values for all fields.');
      return false;
    }
    return true;
  }

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

    // Dispatch an action to save the activity to the context
    dispatch({ type: 'SAVE_ACTIVITY', payload: newActivity });
    // Navigate to the previous screen
    navigation.goBack();
  }

  function handleCancelActivity() {
    console.log('cancel activity')
    setName(null)
    setDuration(null)
    setDate(new Date())
    navigation.goBack();
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
        <MyTextInput label="Duration (min) *" value={duration} onChangeText={handleActivityDurationInput} type={"number"} />
        <Text style={Styles.inputHeader}>Date *</Text>
        <TextInput value={date ? date.toDateString() : ''} onFocus={() => setShow(true)} style={Styles.textInput}/>
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
        <View style={Styles.buttonsView}>
          <Button title="Cancel" color={Colors.cancelResetColorRed} onPress={handleCancelActivity} />
          <Button title="Save" onPress={handleSaveActivity} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})