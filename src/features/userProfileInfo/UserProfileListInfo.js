import { memo, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useUserProfileList } from "../../apiHook/useUserProfileList";
import UserProfileDiscription from "./UserProfileDiscription";
import { getLoading, getUserInfo } from "./userProfileInfoSelector";
import { getUserInfoTC } from "./userProfileListInfoSlice";
import UserProfileNotification from "./UserProfileNotification";
import UserProfileTelephone from "./UserProfileTelephone";
import UserProfileUserName from "./UserProfileUserName";

const UserProfileLIstInfo = memo((props) => {

    const userInfo = useUserProfileList()

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserInfoTC(userInfo))
    }, [])

    const loading = useSelector(getLoading)
    const userListInfo = useSelector(getUserInfo)

    return (

        <View>
            {
                loading &&
                <>
                    {userListInfo.telephone && <UserProfileTelephone telephone={userListInfo.telephone} />}
                    {userListInfo.discription && <UserProfileDiscription discription={userListInfo.discription} />}
                    {userListInfo.userName && <UserProfileUserName userName={userListInfo.userName} />}
                    <UserProfileNotification notification={userListInfo.notification} />
                </>
            }
        </View>


    )
})


export default UserProfileLIstInfo