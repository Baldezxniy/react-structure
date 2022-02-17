import { memo, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { ModalCopy } from "../../components/ModalCopy";
import { userStyle } from "../../styles/userStyles";
import { useTranslation } from 'react-i18next';


const UserProfileDiscription = memo(({ discription }) => {
    const { t } = useTranslation();

    const [openCopy, setOpenCopy] = useState(false)
    const [textCopy, setTextCopy] = useState('')
    const handlePress = () => {
        setOpenCopy(true);
        setTextCopy(discription)
    }
    return (
        <>
            <ModalCopy openCopy={openCopy} setOpenCopy={setOpenCopy} textCopy={textCopy} setTextCopy={setTextCopy} />
            <TouchableHighlight onLongPress={handlePress} style={userStyle.info__item}>
                <>
                    <View >
                        <Text style={{ fontSize: 16 }}>
                            {discription}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                            {t("userProfile.info.bio")}
                        </Text>
                    </View>
                </>
            </TouchableHighlight>
        </>
    )
})

export default UserProfileDiscription