import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    footer__container: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    footer__text: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 14
    },
    footer__link: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 55,
        height: 55,
        backgroundColor: '#4169E1',
        borderRadius: 50
    }
})