import { Text, View, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'
import MyTextInput from '../components/MyTextInput'
import { deleteFromDB } from '../firebase-files/firestoreHelper';
import { AntDesign } from '@expo/vector-icons';
import PressableButton from './PressableButton';
import Checkbox from 'expo-checkbox';

// This screen is used to add an activity to the list of activities
export default function ActivityForm({ title, onSubmit, onCancel, initialValues, navigation }) {
    // Set the header options for this screen
    useEffect(() => {
        navigation.setOptions({
            headerTitle: title,
            headerStyle: Styles.header,
            headerShown: true,
            headerTitleStyle: Styles.headerTitle,
            ...(title === 'Edit' && {
                headerRight: () => (
                    <PressableButton
                        onPress={handleDeleteActivity}
                    >
                        <AntDesign name="delete" size={24} color="black" />
                    </PressableButton>
                ),
            }),
        });
    })
    const [open, setOpen] = useState(false);
    const [name, setName] = useState(initialValues.name || null);
    const [items, setItems] = useState([
        { label: 'Walking', value: 'Walking' },
        { label: 'Running', value: 'Running' },
        { label: 'Swimming', value: 'Swimming' },
        { label: 'Weights', value: 'Weights' },
        { label: 'Yoga', value: 'Yoga' },
        { label: 'Cycling', value: 'Cycling' },
        { label: 'Hiking', value: 'Hiking' },
    ]);
    const [duration, setDuration] = useState(initialValues.duration || null);
    const [date, setDate] = useState(initialValues.date ? initialValues.date.toDate() : '');
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [isSpecial, setIsSpecial] = useState(initialValues.isSpecial);

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

    // Validate the inputs
    function validateInputs() {
        if (!date || !name || !duration || isNaN(duration) || duration <= 0) {
            // alert('Invalid Input', 'Please check your input values.');
            Alert.alert('Invalid Input', 'Please check your input values.');
            return false;
        }
        return true;
    }

    // Save the activity to the database
    function handleSaveActivity() {
        if (!validateInputs()) {
            return;
        }
        onSubmit({ name, duration, date, isSpecial: !isChecked });
    }

    // Toggle the date time picker
    function toggleDateTimePicker() {
        if (!date) {
            setDate(new Date());
        }
        setShow(!show);
    }

    function handleDeleteActivity() {
        Alert.alert(
            "Delete",
            "Are you sure you want to delete this item?",
            [
                {
                    text: 'No',
                },
                {
                    text: 'Yes',
                    onPress: () => { deleteFromDB(initialValues.id), navigation.goBack() },
                },
            ],
            { cancelable: false }
        );
    }
    console.log('date', date)

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
                {/* checkbox to change the speciality of the activity */}
                {isSpecial && (
                    <View style={Styles.checkboxContainer}>
                        <Text style={Styles.checkboxText}>
                            This item is marked as special. Select the checkbox if you would like to approve it.
                        </Text>
                        <Checkbox
                            value={isChecked}
                            onValueChange={() => setIsChecked(!isChecked)}
                        />
                    </View>
                )}

                {!show && (
                    <View style={Styles.buttonsView}>
                        <Button title="Cancel" color={Colors.cancelResetColorRed} onPress={onCancel} />
                        <Button title="Save" onPress={handleSaveActivity} />
                    </View>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

