import { View } from "react-native"
import {Entypo} from 'react-native-vector-icons'
import { stylesMainMenu } from "../styles/mainMenuStyles"
const ThemeApp = () => {
    return (
        <View style={stylesMainMenu.menu__header__theme}>
            <Entypo name='light-up' style={{ fontSize: 20 }} />
        </View>
    )
}
export default ThemeApp