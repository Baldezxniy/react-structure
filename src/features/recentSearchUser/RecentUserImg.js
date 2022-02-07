import { memo } from "react"
import { Image, View } from "react-native"


const RecentUserAvatar = memo(({ avatar, online }) => {
    return (
        <View style={{ position: "relative" }}>
            <Image style={{ width: 55, height: 55, borderRadius: 50 }} source={{ uri: avatar }} />
            {online && <View style={{ position: "absolute", bottom: 2, right: 2, borderBottomColor: '#fff', borderWidth: 1, width: 15, height: 15, backgroundColor: 'blue', borderRadius: 50 }}></View>}
        </View>
    )
})

export default RecentUserAvatar