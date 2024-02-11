import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useActivity } from '../components/ActivityContext';

export default function AddAnActivity({ navigation }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [items, setItems] = useState([
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ]);
  const [duration, setDuration] = useState(null);
  const [date, setDate] = useState(null);
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

  function handleSaveActivity() {
    console.log('save activity')
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
      <View>
        <Text>Activity *</Text>
        <DropDownPicker
          open={open}
          value={name}
          items={items}
          setOpen={setOpen}
          setValue={setName}
          setItems={setItems}
          placeholder='Select An Activity'
          onChangeValue={handleActivityNameInput}
        />
        <Text>Duration (min) *</Text>
        <TextInput type="number" value={duration} onChangeText={handleActivityDurationInput} />
        <Text>Date *</Text>
        {/* // TODO: there is a bug, the default value should be empty */}
        <TextInput value={date ? date.toDateString() : new Date().toDateString()} onFocus={() => setShow(true)} />
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
        <Button title="Cancel" color="red" onPress={handleCancelActivity} />
        {/* TOTO: handle save activity */}
        <Button title="Save" onPress={handleSaveActivity} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({})