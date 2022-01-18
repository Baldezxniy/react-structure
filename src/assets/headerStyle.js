import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
    header: {
        marginTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        height: 45,
        width: '100%'

    },
    header__menu: {
        justifyContent: 'center',
    },

    header__logo: {
        justifyContent: 'center',
        flexGrow: 1
    },
    search: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    header__logo__text: {
        color: '#fff',
        fontSize: 21,
        paddingLeft: 20,
        fontWeight: '600'
    }

});
