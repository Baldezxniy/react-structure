import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRecentUser } from "../../apiHook/useRecentUser"
import { getUsersTC } from "./recentSearchUserSlice"
import RecentUserItem from "./RecentUserItem"
import { getLoading, getRecentUsers } from "./recentUserSelector"

const RecentUserList = () => {
    const users = useRecentUser()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsersTC(users))
    }, [])
    const usersState = useSelector(getRecentUsers)
    const loading = useSelector(getLoading)

    return (
        <>
            {
                loading ?
                    usersState.map(user => {
                        return (
                            <RecentUserItem key={user.userId} chatId={user.chatId} userId={user.userId}
                                firstName={user.firstName} avatar={user.avatar} online={user.online} />
                        )
                    })
                    :
                    <></>
            }
        </>
    )
}

export default RecentUserList