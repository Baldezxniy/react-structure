import { Text, View } from "react-native"
import UserProfileLIstInfo from "../features/userProfileInfo/UserProfileListInfo"
import { useTranslation } from 'react-i18next';

const UserProfileInfo = () => {

    const { t } = useTranslation();

    return (
        <View >
            <View >
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                    <Text style={{ color: '#4169E1', fontSize: 15, fontWeight: '700' }}>
                        {t("userProfile.info.title")}
                    </Text>
                </View>
                <UserProfileLIstInfo />
            </View>
        </View>
    )
}


export default UserProfileInfo