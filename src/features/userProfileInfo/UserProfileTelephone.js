import { memo, useState } from "react";
import { Text, View, TouchableHighlight, Vibration } from "react-native";
import { ModalCopy } from "../../components/ModalCopy";
import { userStyle } from "../../styles/userStyles";
import { useTranslation } from 'react-i18next'
const UserProfileTelephone = memo(({ telephone }) => {
    const { t } = useTranslation();

    const [openCopy, setOpenCopy] = useState(false)
    const [textCopy, setTextCopy] = useState('')
    const handlePress = () => {
        Vibration.vibrate(50)
        setOpenCopy(true);
        setTextCopy(telephone)
    }
    return (
        <>
            <ModalCopy openCopy={openCopy} setOpenCopy={setOpenCopy} textCopy={textCopy} setTextCopy={setTextCopy} />

            <TouchableHighlight onLongPress={handlePress} underlayColor='#82838c' style={userStyle.info__item}>
                <>
                    <View >
                        <Text style={{ fontSize: 16 }}>
                            {telephone}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                            {t("userProfile.info.mobile")}
                        </Text>
                    </View>
                </>
            </TouchableHighlight>
        </>
    )
})

export default UserProfileTelephone