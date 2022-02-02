import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getTelephone } from "./profileSelector";

const SettingDataPhone = memo((props) => {
    const  telephone = useSelector(getTelephone)
    return (
        <View>
            <Text style={{ fontSize: 16 }}>
                {telephone}
            </Text>
        </View>
    )
})

export default SettingDataPhone