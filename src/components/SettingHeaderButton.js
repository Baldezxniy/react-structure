import { memo } from "react";
import { TouchableHighlight, View } from "react-native";
import { Feather, Ionicons } from 'react-native-vector-icons'
import { stylesHeader } from "../assets/headerStyle";

const SettingHeaderButton = memo(({ openMenuHeandler }) => {
    return (
        <View style={stylesHeader.header__button}>
            <View style={stylesHeader.header__right__buttom}>
                <Feather name='search' style={{ color: '#fff', fontSize: 20, marginRight: 20 }} />
            </View>
            <TouchableHighlight underlayColor="none" onPress={openMenuHeandler} style={stylesHeader.header__right__buttom}>
                <Ionicons name='ellipsis-horizontal' style={{ transform: [{ rotate: '90deg' }], fontSize: 22 }} />

            </TouchableHighlight>

        </View>
    )
})


export default SettingHeaderButton