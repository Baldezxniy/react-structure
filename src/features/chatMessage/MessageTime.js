import { Text } from "react-native"

const MessageTime = ({ time, marginRight }) => {
    return (
        <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', marginRight }}>
            {time}
        </Text>
    )
}


export default MessageTime