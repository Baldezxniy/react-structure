import { Text } from "react-native"

const MessageChange = ({ changed }) => {
    return (
        <>
            {changed && <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', marginRight: 4}}>
                изменено
            </Text>}
        </>
    )
}

export default MessageChange