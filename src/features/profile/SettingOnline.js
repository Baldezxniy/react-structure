import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { grtOnline } from "./profileSelector";
import { useTranslation } from 'react-i18next';


const SettingOnline = memo((props) => {
    const online = useSelector(grtOnline)
    const { t, i18n } = useTranslation();

    return (
        <View>
            <Text style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
                {online ? t("setting.online.online") : t("setting.online.recently")}
            </Text>
        </View>
    )
})

export default SettingOnline