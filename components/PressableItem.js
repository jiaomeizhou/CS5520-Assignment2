import { Pressable, Platform } from 'react-native'
import React from 'react'
import { Styles } from './Styles'
import * as Colors from './Color'

export default function PressableItem({ onPress, children }) {
    const androidRipple = Platform.OS === 'android' ? { color: Colors.primaryWhiteColor } : {};
    return (
        <Pressable onPress={onPress} android_ripple={androidRipple} style={({ pressed }) => [pressed && Styles.pressedView]}>
            {children}
        </Pressable>)
}