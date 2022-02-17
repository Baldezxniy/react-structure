import { Text } from "react-native"

const MessageChange = ({ t, changed }) => {
    return (
        <>
            {changed && <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', marginRight: 4 }}>
                {t("chat.messageEdited")}
            </Text>}
        </>
    )
}

export default MessageChange