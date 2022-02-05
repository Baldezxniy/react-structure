import { StyleSheet } from "react-native";

export const mainStyles = StyleSheet.create({
    row__container: {
        flexDirection: 'row',


    },
    folders__item: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,

    },
    active: {

        marginTop: 7,
        borderTopColor: '#4169E1',
        borderStyle: 'solid',
        borderTopWidth: 5,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10
    },
    folders__item__text: {
        color: '#4169E1',
        fontSize: 14,
        paddingRight: 5,
        paddingLeft: 8,
    },
    folders__item__bedge: {
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#4169E1',

    }
})