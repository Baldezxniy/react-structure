import { memo } from "react";
import { Image, View } from "react-native";

const UserProfileImg = memo(({img}) => {
    return (
        <View style={{ width: '25%', borderStyle: 'solid', borderWidth: 2, borderColor: 'rgba(0, 0, 0, 0.2)' }}>
            <Image style={{ width: '100%', height: 90 }} source={{uri:img}} />
        </View>
    )
})

export default UserProfileImg