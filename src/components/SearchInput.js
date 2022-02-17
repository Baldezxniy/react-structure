import { TextInput, View } from "react-native"
import { stylesHeader } from "../styles/headerStyle"
import { useTranslation } from 'react-i18next';

const SearchInput = ({ input, setInput }) => {
    const { t } = useTranslation()
    const changeHandle = (e) => {
        setInput(e)
    }
    return (
        <View style={stylesHeader.header__content}>
            <TextInput value={input} onChangeText={changeHandle} autoFocus placeholder={t("search.inputPlaceholder")} style={stylesHeader.header__content__input} />
        </View>
    )
}

export default SearchInput