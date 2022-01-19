import { Text } from "react-native"
import { stylesUserItemLIst } from "../../assets/main/userListStyles"

const LastMessageTime = () => {
    return (
        <Text style={stylesUserItemLIst.item__message__time}>
            10:10
        </Text>
    )
}

export default LastMessageTime