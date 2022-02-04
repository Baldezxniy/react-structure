import { memo } from "react";
import { View } from "react-native";
import Avatar from "../features/profile/Avatar";
import Name from "../features/profile/Name";
import SettingOnline from "../features/profile/SettingOnline";
import { settingStyle } from "../styles/settingStyle";

const SettingInfo = memo(() => {

    return (
        <View style={settingStyle.info__block}>
            <Avatar styleContainer={settingStyle.avatar__cntainer} styleAvatar={settingStyle.avatar} />
            <View>
                <Name styleText={{ fontSize: 22 }} />
                <SettingOnline />
            </View>

        </View>
    )
})

export default SettingInfo