import { View } from "react-native"
import { Link } from "react-router-native"
import { stylesHeader } from "../styles/headerStyle"
import UserImg from "../features/chatHeader/UserImg"
import UserName from "../features/chatHeader/UserName"
import UserOnline from "../features/chatHeader/UserOnline"

const ChatHeaderContent = () => {
    return (
        <Link underlayColor='none' to='/profile' style={stylesHeader.header__content}>
            <>
                <UserImg />
                <View style={{ marginLeft: 13 }}>
                    <UserName />
                    <UserOnline />
                </View>
            </>
        </Link>
    )
}

export default ChatHeaderContent