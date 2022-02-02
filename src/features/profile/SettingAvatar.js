import { memo } from "react";
import { Image, View } from "react-native";
import { useSelector } from "react-redux";
import { getAvatar } from "./profileSelector";


const SettingAvatar = memo((props) => {
    const avatar = useSelector(getAvatar)
    return (
        <View style={{ marginRight: 20 }}>
            <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={{uri:avatar}} />
        </View>
    )
})

export default SettingAvatar