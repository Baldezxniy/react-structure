import { View } from "react-native"
import { Foundation, Ionicons } from 'react-native-vector-icons'

const ChatHeaderButton = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
                <Foundation name='telephone' style={{ fontSize: 25, marginRight: 15 }} />
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Ionicons name='ellipsis-horizontal' style={{ transform: [{ rotate: '90deg' }], fontSize: 22 }} />
            </View>
        </View>
    )
}

export default ChatHeaderButton 