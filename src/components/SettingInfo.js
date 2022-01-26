import { memo } from "react";
import { View } from "react-native";
import { settingStyle } from "../assets/setting/settingStyle";
import SettingImg from "../features/settingInfo/SettingImg";
import SettingName from "../features/settingInfo/SettingName";
import SettingOnline from "../features/settingInfo/SettingOnline";

const SettingInfo = memo(() => {
    return (
        <View style={settingStyle.info__block}>
            <SettingImg />
            <View>
                <SettingName />
                <SettingOnline />
            </View>

        </View>
    )
})

export default SettingInfo