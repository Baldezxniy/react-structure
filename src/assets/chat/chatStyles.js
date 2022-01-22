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
    }
})