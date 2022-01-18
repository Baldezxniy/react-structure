import { Text, View } from "react-native"
import { stylesHeader } from "../../assets/headerStyle"


const HeaderLogo = () => {
    return (
        <View style={stylesHeader.header__logo}>
            <Text style={stylesHeader.header__logo__text}>
                Telegram
            </Text>
        </View>
    )
}


export default HeaderLogo