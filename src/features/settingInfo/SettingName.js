import { memo } from "react";
import { Text, View } from "react-native";

const SettingName = memo((props) => {
    return (
        <View>
            <Text style={{ fontSize: 22, fontWeight: '700' }}>
                Вова
            </Text>
        </View>
    )
})

export default SettingName