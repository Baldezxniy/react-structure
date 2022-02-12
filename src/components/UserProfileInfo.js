import { Text, View } from "react-native"
import UserProfileLIstInfo from "../features/userProfileInfo/UserProfileListInfo"

const UserProfileInfo = () => {
    return (
        <View >
            <View >
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                    <Text style={{ color: '#4169E1', fontSize: 15, fontWeight: '700' }}>
                        Информация
                    </Text>
                </View>
                <UserProfileLIstInfo />
            </View>
        </View>
    )
}


export default UserProfileInfo