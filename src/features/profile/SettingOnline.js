import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { grtOnline } from "./profileSelector";


const SettingOnline = memo((props) => {
    const online = useSelector(grtOnline)
    return (
        <View>
            <Text style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
                {online ? 'в сети' : 'один хуй я это никогда не увижу'}
            </Text>
        </View>
    )
})

export default SettingOnline