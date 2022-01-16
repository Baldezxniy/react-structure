import { Text, View } from "react-native"
import { styles } from "../../../assets/main/headerStyle"


const HeaderLogo = () => {
    return (
        <View style={styles.header__logo}>
            <Text style={styles.header__logo__text}>
                Telegram
            </Text>
        </View>
    )
}


export default HeaderLogo