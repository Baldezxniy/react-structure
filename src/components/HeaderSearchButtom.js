import { stylesHeader } from "../styles/headerStyle"
import {Feather} from 'react-native-vector-icons'
import { View } from "react-native"
import { Link } from "react-router-native"

const HeaderSearchButtom = () => {
    return (
        <View style={stylesHeader.header__right__buttom}>
            <Link to='/search'>
                <Feather name='search' style={{ color: '#fff', fontSize: 20 }} />
            </Link>
        </View>
    )
}
export default HeaderSearchButtom