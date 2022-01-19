import { View } from "react-native"
import { TouchableHighlight } from "react-native"
import { stylesMainMenu } from "../assets/mainMenu/mainMenuStyles"

const MenuTouchable = ({ openMenu, showMenuAnimatedOut }) => {
    return (
        <>
            {openMenu &&
                <TouchableHighlight underlayColor="none" style={stylesMainMenu.touchable} onPress={showMenuAnimatedOut}>
                    <View></View>
                </TouchableHighlight>}
        </>



    )
}

export default MenuTouchable