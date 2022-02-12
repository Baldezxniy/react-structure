import { memo } from "react";
import { Text, View } from "react-native";

const UserProfileDataName = memo(({ firstName, lastName }) => {
    return (
        <View>
            <Text style={{ color: '#fff', fontSize: 19, fontWeight: '700' }}>
                {`${firstName}${lastName ? ` ${lastName}` : ''}`}
            </Text>
        </View>
    )
})

export default UserProfileDataName