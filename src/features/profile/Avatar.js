import { Image, View } from "react-native"
import { useSelector } from "react-redux"
import { getAvatar } from "./profileSelector"
import { memo } from 'react'

const Avatar = memo(({ styleContainer = {}, styleAvatar }) => {
    const avatar = useSelector(getAvatar)
    return (
        <View underlayColor='none' style={styleContainer}>
            <Image style={styleAvatar} source={{ uri: avatar }} />
        </View>
    )
})

export default Avatar