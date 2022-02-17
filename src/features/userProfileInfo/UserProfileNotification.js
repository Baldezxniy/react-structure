import { memo } from "react";
import { Switch, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { userStyle } from "../../styles/userStyles";
import { setNotificationTC } from "./userProfileListInfoSlice";
import { useTranslation } from 'react-i18next';

const UserProfileNotification = memo(({ notification }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch()

    const handleChangeMotification = e => {
        dispatch(setNotificationTC(e))
    }
    return (
        <View style={userStyle.info__item}>
            <View style={{ flexDirection: 'row', paddingRight: 20, borderColor: 'rgba(0, 0, 0, 0.5)', borderStyle: 'solid', borderTopWidth: 1, paddingTop: 10 }}>
                <View style={{ flexGrow: 1 }}>
                    <View>
                        <Text>
                            {t("userProfile.info.notification.title")}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                            {notification ? t("userProfile.info.notification.on") : t("userProfile.info.notification.off")}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={userStyle.notification__border}>
                    </View>
                    <Switch onValueChange={handleChangeMotification} value={notification} trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={false ? "#f5dd4b" : "#f4f3f4"} />
                </View>
            </View>
        </View>
    )
})

export default UserProfileNotification