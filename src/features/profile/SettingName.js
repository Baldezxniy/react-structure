import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getFirstName, getLastName } from "./profileSelector";

const SettingName = memo((props) => {
    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)
    return (
        <View>
            <Text style={{ fontSize: 22}}>
                {`${firstName} ${lastName}`}
            </Text>
        </View>
    )
})

export default SettingName