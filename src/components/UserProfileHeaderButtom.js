import { memo } from "react";
import { View } from "react-native";
import {Ionicons, Foundation} from 'react-native-vector-icons'
import { stylesHeader } from "../assets/headerStyle";
const UserProfileHeaderButtom = memo((props) => {
    return (
        <View style={stylesHeader.header__button}>
            <View style={{ justifyContent: 'center' }}>
                <Foundation name='telephone' style={{ fontSize: 25, marginRight: 15 }} />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Ionicons name='ellipsis-horizontal' style={{ transform: [{ rotate: '90deg' }], fontSize: 22 }} />
            </View>
        </View>
    )
})

export default UserProfileHeaderButtom