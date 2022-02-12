import { memo } from "react";
import { View } from "react-native";
import UserProfileImg from "./UserProfileImg";

const UserProfileImgList = memo(({ content, setPhotoArr, photoArr }) => {

    return (
        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
            {content.map(i => {
                return (
                    <UserProfileImg img={i.img} setPhotoArr={setPhotoArr} photoArr={photoArr} id={i.imgId} />
                )
            })}
        </View>

    )
})

export default UserProfileImgList