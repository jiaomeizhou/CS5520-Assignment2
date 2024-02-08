import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

export default function PhoneNumberInput({ inputHandler }) {
    const [phoneNumber, setPhoneNumber] = React.useState('')

    function handlePhoneNumberInput(phoneNumber) {
        setPhoneNumber(phoneNumber)
        inputHandler(phoneNumber)
    }

    return (
        <View>
            <TextInput value={phoneNumber} onChangeText={handlePhoneNumberInput} />
        </View>
    )
}

const styles = StyleSheet.create({})