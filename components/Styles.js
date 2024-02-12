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
})