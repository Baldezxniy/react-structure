import { Image, View } from "react-native"
import { image } from "../../pages/search/Search"

const SearchListImg = () => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Image style={{ width: 42, height: 42, borderRadius: 50 }} source={image} />
        </View>
    )
}

export default SearchListImg