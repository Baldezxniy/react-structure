import { TextInput, View } from "react-native"
import { stylesHeader } from "../../styles/headerStyle"

const SearchInput = () => {
    return (
        <View style={stylesHeader.header__content}>
		    <TextInput autoFocus  placeholder='Поиск' style={stylesHeader.header__content__input} />
        </View>
    )
}

export default SearchInput