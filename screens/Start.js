import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'
import MyTextInput from '../components/MyTextInput'
import PressableItem from '../components/PressableItem'
import PressableButton from '../components/PressableButton'

// This screen is the first screen of app and can navigate to the AllActivities screen
export default function Start({ navigation }) {
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState('')

    // validate email
    const validateEmail = () => {
        if (email === '' || !email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            setEmailError('Please enter a valid email address.')
            return false
        } else {
            setEmailError('')
            return true
        }
    }

    // validate phone number
    const validatePhoneNumber = () => {
        if (phoneNumber === '' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            setPhoneNumberError('Please enter a valid phone number.')
            return false
        } else {
            setPhoneNumberError('')
            return true
        }
    }

    // receive email input
    function receiveEmailInput(email) {
        setEmail(email)
        setEmailError(''); // Clear the error message when typing
        setPhoneNumberError('');
    }

    // receive phone number input
    function receivePhoneNumberInput(phoneNumber) {
        setPhoneNumber(phoneNumber)
        setPhoneNumberError(''); // Clear the error message when typing
        setEmailError('');
    }

    // start button handler
    function startHandler() {
        const isEmailValid = validateEmail();
        const isPhoneNumberValid = validatePhoneNumber();

        if (isEmailValid && isPhoneNumberValid) {
            navigation.navigate('AllActivitiesStack')
        }
    }

    // reset button handler
    function resetHandler() {
        setEmail('')
        setPhoneNumber('')
        setEmailError('')
        setPhoneNumberError('')
    }

    // disable start button
    function disableStartHandler() {
        return email === '' && phoneNumber === ''
    }

    return (
        <View style={Styles.container}>
            <View>
                <PressableItem>
                    <MyTextInput label='Email Address' value={email} onChangeText={receiveEmailInput} keyboardType={"email-address"} />
                </PressableItem>
                {emailError !== '' && <Text style={Styles.errorText}>{emailError}</Text>}
                <MyTextInput label='Phone Number' value={phoneNumber} onChangeText={receivePhoneNumberInput} keyboardType={"phone-pad"} />
                {phoneNumberError !== '' && <Text style={Styles.errorText}>{phoneNumberError}</Text>}
            </View>
            <View style={Styles.buttonsView}>
                <PressableButton onPress={resetHandler} customButtonStyle={Styles.cancelButton} >
                    <Text style={Styles.buttonText}>Reset</Text>
                </PressableButton>
                <PressableButton onPress={startHandler} disabled={disableStartHandler()} customButtonStyle={Styles.saveButton} >
                    <Text style={Styles.buttonText}>Start</Text>
                </PressableButton>
            </View>
        </View>
    )
}

