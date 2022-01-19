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
    header__left__buttom: {
        justifyContent: 'center',
        width:40
    },

    header__content: {
        justifyContent: 'center',
        flexGrow: 1
    },
    header__right__buttom: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    header__content__text: {
        color: '#fff',
        fontSize: 21,
        fontWeight: '600'
    },
    header__content__input:{
        fontSize:17,
        maxWidth:'82%'
    
      },

});
