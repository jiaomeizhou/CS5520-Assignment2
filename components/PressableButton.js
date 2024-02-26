import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Styles } from './Styles'

export default function PressableButton({ customButtonStyle, onPress, children }) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [Styles.defaultButtonStyle, customButtonStyle, pressed && Styles.pressedView]}>
            <Text style={Styles.buttonText}>{children}</Text>
        </Pressable>
    )
}
