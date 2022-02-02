import { memo } from "react";
import { View } from "react-native";
import UserProfileDiscription from "./UserProfileDiscription";
import UserProfileNotification from "./UserProfileNotification";
import UserProfileTelephone from "./UserProfileTelephone";
import UserProfileUserName from "./UserProfileUserName";

const UserProfileLIstInfo = memo((props) => {
    const telephone = true
    const discription = false
    const userName = false

    return (

        <View>
            {telephone && <UserProfileTelephone />}
            {discription && <UserProfileDiscription />}
            {userName && <UserProfileUserName />}
            <UserProfileNotification />
        </View>


    )
})


export default UserProfileLIstInfo