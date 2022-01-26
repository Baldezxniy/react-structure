import { memo } from "react";
import { Text, View } from "react-native";


const SettingOnline = memo((props) => {
    return (
        <View>
            <Text style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
                в сети
            </Text>
        </View>
    )
})

export default SettingOnline