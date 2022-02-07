import { View } from "react-native"
import ResentSearchChatList from "./ResentSearchChatList"
import ResentSearchListClear from "./ResentSearchListClear"
import { getLoading, getResentChat } from "./resentSearchChatListSelector";
import { getChatListTC } from "./resentSearchChatSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRecentChatList } from "../../apiHook/useResentChatList";
import { useEffect } from "react";

const ResertSearchChat = () => {
    const resentChatsList = useRecentChatList()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getChatListTC(resentChatsList))
    }, [])

    const resentChats = useSelector(getResentChat)
    const loading = useSelector(getLoading)
    return (
        <View>
            {loading &&
                resentChats.length !== 0 ?
                <>
                    <ResentSearchListClear />
                    <ResentSearchChatList resentChats={resentChats} />
                </>
                :
                <></>
            }

        </View>
    )
}

export default ResertSearchChat