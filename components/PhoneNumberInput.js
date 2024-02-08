import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

export default function PhoneNumberInput({ inputHandler, phoneNumber}) {

    function handlePhoneNumberInput(phoneNumber) {
        inputHandler(phoneNumber)
    }
    console.log('enter phoneNumber: ', phoneNumber)

    return (
        <View>
            <TextInput value={phoneNumber} onChangeText={handlePhoneNumberInput} />
        </View>
    )
}

const styles = StyleSheet.create({})