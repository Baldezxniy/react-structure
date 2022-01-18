import { View } from "react-native"
import { stylesMainMenu } from "../../assets/mainMenu/mainMenuStyles"
import {Entypo} from 'react-native-vector-icons'
const ThemeApp = () => {
    return (
        <View style={stylesMainMenu.menu__header__theme}>
            <Entypo name='light-up' style={{ fontSize: 20 }} />
        </View>
    )
}
export default ThemeApp