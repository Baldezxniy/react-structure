import { Image, View } from "react-native"


const UserAvatar = ({ avatar }) => {
    return (
        <View>
            <Image style={{ width: 38, height: 38, borderRadius: 50, justifyContent: 'center' }} source={{ uri: avatar }} />
        </View>
    )
}

export default UserAvatar