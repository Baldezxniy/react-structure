import { memo, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { ModalCopy } from "../../components/ModalCopy";
import { userStyle } from "../../styles/userStyles";

const UserProfileUserName = memo(({ userName }) => {


    const [openCopy, setOpenCopy] = useState(false)
    const [textCopy, setTextCopy] = useState('')
    const handlePress = () => {
        setOpenCopy(true);
        setTextCopy(`@${userName}`)
    }
    return (
        <>
            <ModalCopy openCopy={openCopy} setOpenCopy={setOpenCopy} textCopy={textCopy} setTextCopy={setTextCopy} />

            <TouchableHighlight onLongPress={handlePress} style={userStyle.info__item}>
                <>
                    <View >
                        <Text style={{ fontSize: 16 }}>
                            @{userName}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                            Имя пользователя
                        </Text>
                    </View>
                </>
            </TouchableHighlight>
        </>
    )
})


export default UserProfileUserName