import { Image, View } from "react-native"
import { image } from "../../pages/search/Search"

const ResentSearchItemChatAvatar = ({ avatar }) => {
    return (
        <View style={{ justifyContent: 'center' }}>
            <Image style={{ width: 42, height: 42, borderRadius: 50 }} source={{ uri: avatar }} />
        </View>
    )
}

export default ResentSearchItemChatAvatar