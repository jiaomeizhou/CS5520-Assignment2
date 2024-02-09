import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function AddAnActivity() {
  const [open, setOpen] = useState(false);
  const [activityName, setActivityName] = useState(null);
  const [items, setItems] = useState([
    { label: 'Swimming', value: 'Swimming' },
    { label: 'Weights', value: 'Weights' },
    { label: 'Yoga', value: 'Yoga' },
    { label: 'Cycling', value: 'Cycling' },
    { label: 'Hiking', value: 'Hiking' },
  ]);
  const [activityDuration, setActivityDuration] = useState(null);
  const [activityDate, setActivityDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  function handleActivityNameInput(activityName) {
    setActivityName(activityName)
  }

  function handleActivityDurationInput(activityDuration) {
    setActivityDuration(activityDuration)
  }

  const handleActivityDateInput = (event, selectedDate) => {
    const currentDate = selectedDate || activityDate;
    setShow(false);
    setActivityDate(currentDate);
  };

  function handleSaveActivity() {
    console.log('save activity')
  }

  function handleCancelActivity() {
    console.log('cancel activity')
    setActivityName(null)
    setActivityDuration(null)
    setActivityDate(new Date())
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View>
      <Text>Activity *</Text>
      <DropDownPicker
        open={open}
        value={activityName}
        items={items}
        setOpen={setOpen}
        setValue={setActivityName}
        setItems={setItems}
        placeholder='Select An Activity'
      />
      <Text>Duration (min) *</Text>
      <TextInput type="number" value={activityDuration} onChangeText={handleActivityDurationInput}/>
      <Text>Date *</Text>
      {/* // TODO: there is a bug, the default value should be empty */}
      <TextInput value={activityDate? activityDate.toDateString() : ''} onFocus={() => setShow(true)}/>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={activityDate}
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