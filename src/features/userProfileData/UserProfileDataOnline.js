import { Text, View } from "react-native"
import { useTranslation } from 'react-i18next';

const UserProfileDataOnline = ({ online }) => {
    const { t } = useTranslation();

    return (
        <View >
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13 }}>
                {online ? t("userProfile.online.online") : t("userProfile.online.recently")}
            </Text>
        </View>
    )
}

export default UserProfileDataOnline