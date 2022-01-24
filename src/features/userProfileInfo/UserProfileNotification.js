import { memo } from "react";
import { Switch, Text, View } from "react-native";
import { userStyle } from "../../assets/userProfile/userStyles";

const UserProfileNotification = memo((props) => {
    return (
        <View style={userStyle.info__item}>
            <View style={{ flexDirection: 'row', paddingRight: 20 }}>
                <View style={{ flexGrow: 1 }}>
                    <View>
                        <Text>
                            Уведомления
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                            Включены
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={userStyle.notification__border}>
                    </View>
                    <Switch value={true} trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={false ? "#f5dd4b" : "#f4f3f4"} />
                </View>
            </View>
        </View>
    )
})


export default UserProfileNotification