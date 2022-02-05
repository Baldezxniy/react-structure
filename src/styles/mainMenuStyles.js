import { StyleSheet } from "react-native";

export const stylesMainMenu = StyleSheet.create({
    menu__aninated__container: {
        width: 310,
        height: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 10,
        flexDirection: 'row'
    },
    header__side__menu_left: {

        width: 310,
        height: '100%'
    },
    menu__header__container: {
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: '#354378',
        height: 165,
        paddingTop: 35
    },
    menu__header: {
        flexDirection: 'row',
        marginTop: 5
    },
    menu__header__img: {
        width: 65,
        height: 65,
        borderRadius: 50
    },
    menu__header__theme: {
        flexGrow: 1,
        alignItems: 'flex-end',
        marginTop: 10
    },
    menu__main__container: {
        flexGrow: 1,
        backgroundColor: '#303442'
    },
    list__item__container: {
        flexDirection: 'row',
        borderColor: 'rgba(0, 0, 0, 0.3)'

    },
    list__item: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        paddingLeft: 15
    },
    touchable: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex:0
    }

})
