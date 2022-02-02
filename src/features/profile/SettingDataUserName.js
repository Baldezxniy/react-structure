import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getUserName } from "./profileSelector";

const SettingDataUserName = memo((props) => {
    const userName = useSelector(getUserName)
    return (
        <View >
            {userName ?
                <Text style={{ fontSize: 16 }}>
                    @{userName}
                </Text>
                :
                <Text style={{ fontSize: 16 }}>
                    Не задано
                </Text>
            }
        </View>
    )
})

export default SettingDataUserName