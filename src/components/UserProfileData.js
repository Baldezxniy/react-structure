import { memo } from "react";
import { View } from "react-native";
import UserProfileDataImg from "../features/userProfileData/UserProfileDataImg";
import UserProfileDataName from "../features/userProfileData/USerProfileDataName";
import UserProfileDataOnline from "../features/userProfileData/UserProfileDataOnline";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { Link } from "react-router-native";
import { userStyle } from "../assets/userProfile/userStyles";



const USerProfileData = memo((props) => {
    return (
        <View style={userStyle.info__container} >
            <View style={{ alignItems: 'center', flexDirection: 'row', flexGrow: 1 }}>
                <UserProfileDataImg />
                <View style={{ marginLeft: 13 }}>
                    <UserProfileDataName />
                    <UserProfileDataOnline />
                </View>
            </View>
            <Link to='/chat' underlayColor='none' style={userStyle.info__message}>
                <MaterialCommunityIcons name='message-text-outline' style={{ fontSize: 24 }} />
            </Link>
        </View >
    )
})

export default USerProfileData

