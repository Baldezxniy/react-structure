import { Text } from "react-native"

const MessageTime = ({time}) => {
    return (
        <Text style={{ fontSize: 12, color: 'rgba(0, 0, 0, 0.5)', paddingBottom: 3, paddingRight: 10 }}>
            {time}
        </Text>
    )
}


export default MessageTime