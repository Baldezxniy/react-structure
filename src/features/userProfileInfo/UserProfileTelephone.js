import { memo } from "react";
import { Text, View } from "react-native";
import { userStyle } from "../../styles/userStyles";

const UserProfileTelephone = memo((props) => {
    return (
        <View style={userStyle.info__item}>
            <View >
                <Text style={{ fontSize: 16 }}>
                    +1 234 123 41221
                </Text>
            </View>
            <View>
                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                    Телефон
                </Text>
            </View>
        </View>
    )
})

export default UserProfileTelephone