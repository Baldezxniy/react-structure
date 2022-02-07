import { TouchableHighlight } from "react-native"
import { AntDesign } from 'react-native-vector-icons'
import { stylesHeader } from "../styles/headerStyle"

const SearchHeaderClose = ({ input, setInput }) => {
    return (
        <>
            {
                !!input && <TouchableHighlight onPress={() => setInput('')} style={stylesHeader.header__right__buttom}>
                    <AntDesign name='close' style={{ color: '#fff', fontSize: 20 }} />
                </TouchableHighlight>
            }
        </>
    )
}

export default SearchHeaderClose