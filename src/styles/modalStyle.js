import { StyleSheet } from "react-native";

export const modalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28282b'
    },
    header: {
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 7.5,
        flexDirection: 'row',
        height: 56,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.6)',
        borderStyle: 'solid'

    },
    header__arrow: {
        justifyContent: 'center',
        marginRight: 20
    },
    header__param: {
        flexGrow: 1
    },
    header__button: {
        borderRadius: 50,
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main__container: {
        paddingHorizontal: 15,
        marginTop: 30
    },
    input: {
        height: 40,
        fontSize: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderStyle: 'solid'

    },
    textarea: {
        paddingVertical:5,  
        fontSize: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    }
})