import { memo } from "react";
import { View } from "react-native";
import {Ionicons, Foundation} from 'react-native-vector-icons'
const UserProfileHeaderButtom = memo((props) => {
    return (
        <View style={{ flexGrow: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
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