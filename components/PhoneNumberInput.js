import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'
import { Styles } from './Styles'

export default function PhoneNumberInput({ inputHandler, phoneNumber}) {

    function handlePhoneNumberInput(phoneNumber) {
        inputHandler(phoneNumber)
    }
    console.log('enter phoneNumber: ', phoneNumber)

    return (
        <View>
            <TextInput value={phoneNumber} onChangeText={handlePhoneNumberInput} style={Styles.textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({})