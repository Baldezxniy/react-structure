import { Image, View } from "react-native"
import { stylesUserItemLIst } from "../../styles/userListStyles"
import { Ionicons } from 'react-native-vector-icons'

const UserAavatar = ({ avatar, online, selectArr, chatId, select}) => {
    
    return (
        <View style={stylesUserItemLIst.item__img__container} >
            <Image style={stylesUserItemLIst.item__img} source={{ uri: avatar }} />
            <>
                {
                    online && !select && <View style={stylesUserItemLIst.img__online} ></View>
                }
                {
                    selectArr.includes(chatId) && <View style={stylesUserItemLIst.img__select} ><Ionicons name='checkmark' /></View>
                }
            </>
        </View>
    )
}

export default UserAavatar 