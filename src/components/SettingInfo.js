import { memo } from "react";
import { View } from "react-native";
import SettingAvatar from "../features/profile/SettingAvatar";
import SettingName from "../features/profile/SettingName";
import SettingOnline from "../features/profile/SettingOnline";
import { settingStyle } from "../styles/settingStyle";

const SettingInfo = memo(() => {
    return (
        <View style={settingStyle.info__block}>
            <SettingAvatar />
            <View>
                <SettingName />
                <SettingOnline />
            </View>

        </View>
    )
})

export default SettingInfo