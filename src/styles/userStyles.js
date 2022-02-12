import { StyleSheet } from "react-native";

export const userStyle = StyleSheet.create({
    info__container: {
        flexDirection: 'row',
        height: 90,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: 'rgba(0,0, 0, 0.3)',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        position: 'relative'
    },
    info__message: {
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
    info__item: {
        paddingLeft: 20,
        paddingBottom: 13,
    },
    notification__border: {
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderStyle: 'solid',
        borderLeftWidth: 1,
        height: 25,
        marginRight: 10
    },
    container__folders: {
        flexDirection: 'row',
        height: 36.7
    },
    folders__item: {
        paddingTop: 10,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
    },
    active__folders__item: {
        borderBottomColor: '#4169E1',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginTop: 3
    },
    folders__item__text: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 13.5,
        paddingRight: 8,
        paddingLeft: 8,
        fontWeight: '700'
    },
    list__img__item: {
        width: '25%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    }
})