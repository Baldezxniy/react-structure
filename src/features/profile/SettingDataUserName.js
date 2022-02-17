import { memo } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getUserName } from "./profileSelector";
import { useTranslation } from 'react-i18next';

const SettingDataUserName = memo((props) => {
    const userName = useSelector(getUserName)
    const { t } = useTranslation();
    return (
        <View >
            {userName ?
                <Text style={{ fontSize: 16 }}>
                    @{userName}
                </Text>
                :
                <Text style={{ fontSize: 16 }}>
                    {t("setting.account.userName.none")}
                </Text>
            }
        </View>
    )
})

export default SettingDataUserName