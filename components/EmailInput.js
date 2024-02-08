import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

// This is a component that allow user to input email
export default function EmailInput({ inputHandler, email}) {

    function handleEmailInput(email) {
        inputHandler(email)
    }
    console.log('enter email: ', email)
    return (
        <View>
            <TextInput value={email} onChangeText={handleEmailInput}/>
        </View>
    )
}

const styles = StyleSheet.create({})