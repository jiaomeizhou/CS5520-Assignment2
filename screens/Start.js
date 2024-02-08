import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EmailInput from '../components/EmailInput'
import PhoneNumberInput from '../components/PhoneNumberInput'

// This is the first screen that the user sees when starting the app.
// There are two Texts, two TextInputs, and two Buttons.
export default function Start() {
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState('')

    const validateEmail = () => {
        if (email === '' || !email.includes('@') 
            || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
            setEmailError('Please enter a valid email address.')
        } else {
            setEmailError('')
        }
    }

    const validatePhoneNumber = () => {
        if (phoneNumber === '' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            setPhoneNumberError('Please enter a valid phone number.')
        } else {
            setPhoneNumberError('')
        }
    }

    function receiveEmailInput(email) {
        setEmail(email)
    }

    function receivePhoneNumberInput(phoneNumber) {
        setPhoneNumber(phoneNumber)
    }

    return (
        <View>
            <View>
                <Text>Email Address</Text>
                <EmailInput inputHandler={receiveEmailInput}/>
                <Text>Phone Number</Text>
                <PhoneNumberInput inputHandler={receivePhoneNumberInput}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})