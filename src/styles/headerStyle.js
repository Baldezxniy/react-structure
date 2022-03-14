import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
    header: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        height: 50,
        width: '100%',
        backgroundColor: '#282045'
    },
    header__left__buttom: {
        justifyContent: 'center',
        width: 40
    },

    header__content: {
        alignItems: 'center',
        flexGrow: 1,
        flexDirection: 'row'
    },
    header__right__buttom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    header__content__text: {
        color: '#fff',
        fontSize: 21,
        fontWeight: '600'
    },
    header__content__input: {
        fontSize: 17,
        maxWidth: '82%'

    },
    header__button: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }

});
