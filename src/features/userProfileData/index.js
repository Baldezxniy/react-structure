import { memo, useEffect } from "react";
import { View } from "react-native";
import UserProfileDataName from "./USerProfileDataName";
import UserProfileDataOnline from "./UserProfileDataOnline";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Link } from "react-router-native";
import { userStyle } from "../../styles/userStyles";
import UserProfileDataAvatar from "./UserProfileDataAvatar";
import { useUserProfileData } from "../../apiHook/useUserProfileData";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, getUserData } from "./userProfileDataSelector";
import { getUserDataTC } from "./userProfileDataSlice";



const USerProfileData = memo(({ setUserName }) => {
    const userDataHook = useUserProfileData()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserDataTC(userDataHook))
    }, [])
    const loading = useSelector(getLoading)
    const userData = useSelector(getUserData)

    useEffect(() => {
        setUserName({ firstName: userData.firstName, lastName: userData.lastNames })
    }, [userData])
    return (
        <>
            {loading ?
                <View style={userStyle.info__container} >
                    <View style={{ alignItems: 'center', flexDirection: 'row', flexGrow: 1 }}>
                        <UserProfileDataAvatar avatar={userData.avatar} />
                        <View style={{ marginLeft: 13 }}>
                            <UserProfileDataName firstName={userData.firstName} lastName={userData.lastName} />
                            <UserProfileDataOnline online={userData.online} />
                        </View>
                    </View>
                    <Link to='/chat' underlayColor='none' style={userStyle.info__message}>
                        <MaterialCommunityIcons name='message-text-outline' style={{ fontSize: 24 }} />
                    </Link>
                </View >
                :

                <></>
            }
        </>
    )
})

export default USerProfileData

