import { StyleSheet } from "react-native";

export const chatStyles = StyleSheet.create({
    message__container: {
        backgroundColor: '#87CEEB',
        borderRadius: 13,
        maxWidth: 280,
        minWidth: 80,
        marginVertical: 2,
        flexDirection: 'row',
    },
    message__data: {
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    input__container: {
        minHeight: 45,
        backgroundColor: '#282045',
        paddingVertical: 10,
        maxHeight: 200,
        height: 'auto',
        width: '100%',
        paddingRight: 15,
        paddingLeft: 15,
        flexDirection: 'row'
    },
    input__button: {
        justifyContent: 'flex-end',
        width:35
    }
})