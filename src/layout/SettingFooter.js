import { memo } from "react";
import { Text, View } from "react-native";
import { settingStyle } from "../assets/setting/settingStyle";

const SettingFooter = memo(() => {
    return (
        <View style={settingStyle.setting__footer__conteiner}>
            <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)' }}>
                Telegram для Android v8.4.2
            </Text>
        </View>
    )
})

export default SettingFooter