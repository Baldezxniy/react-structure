import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getDiscription } from "./profileSelector";

const SettingDataDiscription = memo((props) => {
    const discription = useSelector(getDiscription)
    return (
        <View>
            {discription ?
                <Text style={{ fontSize: 16 }}>
                    {discription}
                </Text>
                :
                <Text style={{ fontSize: 16 }}>
                    О себе
                </Text>
            }
        </View>
    )
})

export default SettingDataDiscription