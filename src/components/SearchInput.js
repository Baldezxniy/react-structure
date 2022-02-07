import { TextInput, View } from "react-native"
import { stylesHeader } from "../styles/headerStyle"

const SearchInput = ({ input, setInput }) => {
    const changeHandle = (e) => {
        setInput(e)
    }
    return (
        <View style={stylesHeader.header__content}>
            <TextInput value={input} onChangeText={changeHandle} autoFocus placeholder='Поиск' style={stylesHeader.header__content__input} />
        </View>
    )
}

export default SearchInput