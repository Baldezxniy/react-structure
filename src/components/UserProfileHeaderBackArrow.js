import { memo } from "react";
import { View } from "react-native";
import { Link } from "react-router-native";
import { stylesHeader } from "../assets/headerStyle";
import {Ionicons} from 'react-native-vector-icons'


const UserProfileHeaderBackArrow = memo((props) => {
    return (
        <View style={stylesHeader.header__left__buttom}>
            <Link to='/chat'>
                <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
            </Link>
        </View>
    )
}) 

export default UserProfileHeaderBackArrow