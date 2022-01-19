import { Text, View } from "react-native"
import { SearchStyles } from "../assets/search/SearchStyles"
import SearchListClear from "../features/searchList/SearchListClear"

const SearchClear = () => {
    return (
        <View style={SearchStyles.clear__container}>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '600' }}>
                    Недавние
                </Text>
            </View>
            <SearchListClear />

        </View>
    )
}


export default SearchClear