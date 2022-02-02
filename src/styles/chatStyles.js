import { StyleSheet } from "react-native";

export const chatStyles = StyleSheet.create({
    message__container: {
        backgroundColor: '#87CEEB',
        borderRadius: 13,
        marginLeft: 15,
        marginRight: 15,
        maxWidth: 280,
        minWidth: 80,
        marginVertical: 2
    },
    message__data: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    input__container: {
        justifyContent: 'flex-end',
        height: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15,
        flexDirection: 'row'
    },
    input__button: {
        justifyContent: 'flex-end',
        paddingBottom: 12,
        marginRight: 15
    }
})