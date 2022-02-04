import { Text } from "react-native"
import { stylesUserItemLIst } from "../../styles/userListStyles"

const LastMessageTime = ({time}) => {
    return (
        <Text style={stylesUserItemLIst.item__message__time}>
            {time}
        </Text>
    )
}

export default LastMessageTime