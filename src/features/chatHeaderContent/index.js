import { useEffect } from "react"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-native"
import { useChatHeader } from "../../apiHook/useChatHeader"
import { stylesHeader } from "../../styles/headerStyle"
import { getLoading, getUser } from "./chatHeaderSelector"
import { getUserTC } from "./chatHeaderSlice"
import UserAvatar from "./UserAvatar"
import UserName from "./UserName"
import UserOnline from "./UserOnline"

const ChatHeaderContent = ({setUserName}) => {
    const dispatch = useDispatch()

    const user = useChatHeader()

    useEffect(() => {
        dispatch(getUserTC(user))
    }, [])
    const loading = useSelector(getLoading)

    const userState = useSelector(getUser)
    useEffect(() => {
        setUserName({
            firstName: userState.firstName,
            lastName: userState.lastName
        })
    }, [userState])
    return (
        <>
            {loading &&
                <Link underlayColor='none' to='/profile' style={stylesHeader.header__content}>
                    <>
                        <UserAvatar avatar={userState.avatar} />
                        <View style={{ marginLeft: 13 }}>
                            <UserName firstName={userState.firstName} lastName={userState.lastName} />
                            <UserOnline online={userState.online} />
                        </View>
                    </>
                </Link>
            }
            {
                !loading && <></>
            }
        </>
    )
}

export default ChatHeaderContent