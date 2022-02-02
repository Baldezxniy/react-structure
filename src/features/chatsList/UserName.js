import { Text, View } from "react-native"
import { stylesUserItemLIst } from "../../styles/userListStyles"

const UserName = () => {
    return (
        <View style={stylesUserItemLIst.item__name}>
            <Text style={stylesUserItemLIst.item__name__text}>
                Вова
            </Text>
        </View>
    )
}

export default UserName