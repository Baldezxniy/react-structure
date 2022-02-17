import { Text, View } from "react-native"
import { useTranslation } from 'react-i18next';

const UserOnline = ({ online }) => {
    const { t } = useTranslation();

    return (
        <View>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 14 }}>
                {
                    online ? t("chat.online.online") : t("chat.online.recently")
                }
            </Text>
        </View>
    )
}

export default UserOnline