import { StyleSheet } from 'react-native'
import * as Colors from './Color'

export const Styles = StyleSheet.create({
    textInput: {
        width: '100%',
        color: Colors.primaryPurpleColor,
        borderWidth: 2,
        borderColor: Colors.primaryPurpleColor,
        backgroundColor: Colors.textInputBackgroundColor,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    header: {
        backgroundColor: Colors.headerColorPurple,
    },
    headerTitle: {
        color : Colors.primaryWhiteColor,
    },
    bottomTab: {
        backgroundColor: Colors.headerColorPurple,
    },
})