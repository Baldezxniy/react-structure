import { memo } from "react";
import { Text, View } from "react-native";

const UserProfileDataName = memo(() => {
    return (
        <View>
            <Text style={{ color: '#fff', fontSize: 19, fontWeight: '700' }}>
                Вова
            </Text>
        </View>
    )
})

export default UserProfileDataName