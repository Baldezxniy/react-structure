import { StyleSheet } from "react-native";

export const settingStyle = StyleSheet.create({
    info__block: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        height: 100,
        alignItems: 'center',
        position: 'relative',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderBottomWidth: 0.9,
        borderStyle: 'solid',
    },
    info__plus__phhoto: {
        zIndex: 1,
        width: 60,
        height: 60,
        backgroundColor: '#10DBFF',
        borderRadius: 50,
        position: 'absolute',
        bottom: -30,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar__cntainer: {
        marginRight: 20
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50
    },
    data__container: {
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderStyle: 'solid',
        borderBottomWidth: 13
    },
    data__item: {
        marginLeft: 20,
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingBottom: 13,
        marginTop: 10
    },

    setting__item: {
        paddingLeft: 20,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center'
    },
    setting__text__box: {
        height: '100%',
        flexGrow: 1,
        justifyContent: 'center',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderStyle: 'solid',
    },
    setting__footer__conteiner: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        alignItems: 'center'
    },
    menu__body: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2
    },
    menu: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: '#47464f',
        width: 240,
        borderRadius: 10,
        zIndex: 4
    },
    menu__item: {
        flexDirection: 'row',
        height: 45,
        alignItems: 'center'
    },
    menu__item__icon__block: {
        width: 50,
        paddingLeft: 15
    }
})