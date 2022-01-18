import { StyleSheet } from "react-native";

export const stylesUserItemLIst = StyleSheet.create({
    item__container: {
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%'
    },
    item__img__container: {
        width: 60
    },
    item__img: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    item__name__containet: {
        flexDirection: 'row',
        flexGrow: 1
    },
    item__name: {
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
        color: '#fff',
        flexGrow: 1
    },
    item__name__text: {
        fontSize: 16.5,
        fontWeight: '700'
    },
    item__message__time: {
        color: 'rgba(0,0, 0, 0.5)',
        fontSize: 13,
        justifyContent: 'center'
    },
    item__pushpin: {
        borderRadius: 50,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderStyle: 'solid',
        borderWidth: 1,
        padding: 6
    },
    pushpin: {
        transform: [
            { rotate: '90deg' }
        ],

        fontSize: 12
    }
})
