import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EmailInput from '../components/EmailInput'
import PhoneNumberInput from '../components/PhoneNumberInput'

// This is the first screen that the user sees when starting the app.
// There are two Texts, two TextInputs, and two Buttons.
export default function Start({ navigation}) {
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState('')

    const validateEmail = () => {
        if (email === '' || !email.includes('@')
            || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            setEmailError('Please enter a valid email address.')
            return false
        } else {
            setEmailError('')
            return true
        }
    }

    const validatePhoneNumber = () => {
        if (phoneNumber === '' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            setPhoneNumberError('Please enter a valid phone number.')
            return false
        } else {
            setPhoneNumberError('')
            return true
        }
    }

    function receiveEmailInput(email) {
        setEmail(email)
    }
    console.log('receive email: ', email)

    function receivePhoneNumberInput(phoneNumber) {
        setPhoneNumber(phoneNumber)
    }
    console.log('receive phoneNumber: ', phoneNumber)

    function startHandler() {
        validateEmail()
        validatePhoneNumber()
        if (validateEmail() && validatePhoneNumber()) {
            navigation.navigate('AllActivities')
        }
        
    }

    function resetHandler() {
        setEmail('')
        setPhoneNumber('')
        setEmailError('')
        setPhoneNumberError('')
    }

    console.log('error:', emailError, phoneNumberError)

    // The Start button is disabled until user types something in one of the TextInputs.
    function disableStartHandler() {
        return email === '' && phoneNumber === ''
    }

    return (
        <View>
            <View>
                <Text>Email Address</Text>
                <EmailInput inputHandler={receiveEmailInput} email={email}/>
                {emailError !== '' && <Text>{emailError}</Text>}
                <Text>Phone Number</Text>
                <PhoneNumberInput inputHandler={receivePhoneNumberInput} phoneNumber={phoneNumber}/>
                {phoneNumberError !== '' && <Text>{phoneNumberError}</Text>}
            </View>
            <View>
                <Button title='Start' onPress={startHandler} disabled={disableStartHandler()} />
                <Button title='Reset' onPress={resetHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})