import { Text } from "react-native"

const LastMessage = ({text}) => {
    return (
        <Text style={{ color: 'rgba(0,0, 0, 0.5)', flexGrow: 1 }}>
            {text}
        </Text>
    )
}

export default LastMessage