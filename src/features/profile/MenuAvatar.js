import { Image, View } from "react-native"
import { useSelector } from "react-redux"
import { Link } from "react-router-native"
import { stylesMainMenu } from "../../styles/mainMenuStyles"
import { getAvatar } from "./profileSelector"

const MenuAvatar = (props) => {
    const avatar = useSelector(getAvatar)
    return (
        <Link to='/setting' underlayColor='none'>
            <Image style={stylesMainMenu.menu__header__img} source={{ uri: avatar }} />
        </Link>
    )
}

export default MenuAvatar