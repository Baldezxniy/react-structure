import { memo } from "react";
import { Image, View } from "react-native";
import { userStyle } from "../../styles/userStyles";

const UserProfileImg = memo(({ img }) => {
    return (
        <View style={userStyle.list__img__item}>
            <Image style={{ width: '100%', height: 90 }} source={{ uri: img }} />
        </View>
    )
})

export default UserProfileImg