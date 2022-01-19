import { View } from "react-native"
import {AntDesign} from 'react-native-vector-icons'
import { stylesHeader } from "../assets/headerStyle"

const SearchHeaderClose = () => {
    return (
        <View style={stylesHeader.header__right__buttom}>
            <AntDesign name='close' style={{ color: '#fff', fontSize: 20 }} />
        </View>
    )
}

export default SearchHeaderClose