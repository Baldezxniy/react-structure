import { Text, View } from "react-native"
import { stylesUserItemLIst } from "../../styles/userListStyles"

const UserName = ({ firstName, lastName }) => {
    return (
        <View style={stylesUserItemLIst.item__name}>
            <Text style={stylesUserItemLIst.item__name__text}>
                {`${firstName} ${lastName}`}
            </Text>
        </View>
    )
}

export default UserName