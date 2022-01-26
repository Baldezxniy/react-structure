import { memo } from "react";
import { Text, View } from "react-native";

const SettingDataDiscription = memo((props) => {
    return (
        <View>
            <Text style={{ fontSize: 16 }}>
                Я Вова из Саратова
            </Text>
        </View>
    )
})

export default SettingDataDiscription