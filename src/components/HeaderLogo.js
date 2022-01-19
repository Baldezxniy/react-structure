import { Text, View } from "react-native"
import { stylesHeader } from "../assets/headerStyle"


const HeaderLogo = () => {
    return (
        <View style={stylesHeader.header__content}>
            <Text style={stylesHeader.header__content__text}>
                Telegram
            </Text>
        </View>
    )
}


export default HeaderLogo