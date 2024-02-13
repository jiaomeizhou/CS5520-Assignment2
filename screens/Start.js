import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EmailInput from '../components/EmailInput'
import PhoneNumberInput from '../components/PhoneNumberInput'
import { Styles } from '../components/Styles'
import * as Colors from '../components/Color'
import MyTextInput from '../components/MyTextInput'

export default function Start({ navigation }) {
    const [email, setEmail] = React.useState('')
    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [emailError, setEmailError] = React.useState('')
    const [phoneNumberError, setPhoneNumberError] = React.useState('')

    const validateEmail = () => {
        if (email === '' || !email.includes('@') || !email.includes('.') || email.indexOf('@') > email.lastIndexOf('.')) {
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
        setEmailError(''); // Clear the error message when typing
        setPhoneNumberError('');
    }

    function receivePhoneNumberInput(phoneNumber) {
        setPhoneNumber(phoneNumber)
        setPhoneNumberError(''); // Clear the error message when typing
        setEmailError(''); 
    }

    function startHandler() {
        const isEmailValid = validateEmail();
        const isPhoneNumberValid = validatePhoneNumber();

        if (isEmailValid && isPhoneNumberValid) {
            navigation.navigate('AllActivitiesStack')
        }
    }

    function resetHandler() {
        setEmail('')
        setPhoneNumber('')
        setEmailError('')
        setPhoneNumberError('')
    }

    function disableStartHandler() {
        return email === '' && phoneNumber === ''
    }

    return (
        <View style={Styles.container}>
            <View>
                {/* <Text style={Styles.inputHeader}>Email Address</Text>
                <EmailInput inputHandler={receiveEmailInput} email={email} /> */}
                <MyTextInput label='Email Address' value={email} onChangeText={receiveEmailInput} />
                {emailError !== '' && <Text style={Styles.errorText}>{emailError}</Text>}
                {/* <Text style={Styles.inputHeader}>Phone Number</Text>
                <PhoneNumberInput inputHandler={receivePhoneNumberInput} phoneNumber={phoneNumber} /> */}
                <MyTextInput label='Phone Number' value={phoneNumber} onChangeText={receivePhoneNumberInput} />
                {phoneNumberError !== '' && <Text style={Styles.errorText}>{phoneNumberError}</Text>}
            </View>
            <View style={Styles.buttonsView}>
                <Button title='Reset' onPress={resetHandler} color={Colors.cancelResetColorRed}/>
                <Button title='Start' onPress={startHandler} disabled={disableStartHandler()} />
            </View>
        </View>
    )
}

