import { Image, View } from "react-native"
import { stylesUserItemLIst } from "../../styles/userListStyles"


const UserAavatar = ({ avatar, online }) => {

    return (
        <View style={stylesUserItemLIst.item__img__container} >
            <Image style={stylesUserItemLIst.item__img} source={{ uri: avatar }} />
            <>
                {
                    online && <View style={stylesUserItemLIst.img__online} ></View>
                   
                }
            </>
        </View>
    )
}

export default UserAavatar 