import { memo } from "react";
import { View } from "react-native";
import UserProfileImg from "./UserProfileImg";

const UserProfileImgList = memo(({ content, setMessageArr, messageArr }) => {

    return (
        <View style={[{ flexDirection: 'row', flexWrap: 'wrap' }]}>
            {content.map(i => {
                return (
                    <UserProfileImg img={i.img} setMessageArr={setMessageArr} messageArr={messageArr} id={i.imgId} />
                )
            })}
        </View>

    )
})

export default UserProfileImgList