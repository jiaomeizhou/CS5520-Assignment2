import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import EmailInput from '../components/EmailInput'
import PhoneNumberInput from '../components/PhoneNumberInput'
import * as Colors from '../components/Color.js';

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
    }

    function receivePhoneNumberInput(phoneNumber) {
        setPhoneNumber(phoneNumber)
    }

    function startHandler() {
        const isEmailValid = validateEmail();
        const isPhoneNumberValid = validatePhoneNumber();

        if (isEmailValid && isPhoneNumberValid) {
            navigation.navigate('AllActivities')
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
        <View style={styles.container}>
            <View>
                <Text style={styles.inputHeader}>Email Address</Text>
                <EmailInput inputHandler={receiveEmailInput} email={email} />
                {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
                <Text style={styles.inputHeader}>Phone Number</Text>
                <PhoneNumberInput inputHandler={receivePhoneNumberInput} phoneNumber={phoneNumber} />
                {phoneNumberError !== '' && <Text style={styles.errorText}>{phoneNumberError}</Text>}
            </View>
            <View style={styles.buttonsView}>
                <Button title='Reset' onPress={resetHandler} color={Colors.cancelResetColorRed}/>
                <Button title='Start' onPress={startHandler} disabled={disableStartHandler()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.primaryBackgroundColor,
        padding: 20,
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    inputText: {
        fontSize: 16,
        color: Colors.primaryPurpleColor,
    },
    errorText: {
        color: Colors.warningColorBlack,
        fontSize: 14,
    },
    inputHeader: {
        fontSize: 16,
        color: Colors.primaryPurpleColor,
        fontWeight: 'bold',
    }
});
