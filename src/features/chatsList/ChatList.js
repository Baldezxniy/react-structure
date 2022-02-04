import { memo, useEffect } from "react"
import { ActivityIndicator, ScrollView, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useChatList } from "../../apiHook/useChatList"
import ChatListItem from "./ChatListItem"
import { getChatLIstTC } from "./chatListSlice"
import { getChats, getLoader } from "./chatsSelector"

const users = [
    {}
]

const ChatList = memo(() => {
    const dispatch = useDispatch()
    const chats = useChatList()
    useEffect(() => {
        dispatch(getChatLIstTC(chats))
    }, [])
    const loader = useSelector(getLoader)

    const stateChat = useSelector(getChats)
    
    return (
        <View>
            {
                loader ?
                    < ScrollView >
                        {
                            stateChat.map(chat => {
                                return (
                                    <ChatListItem key={chat.chatId}
                                        chatId={chat.chatId} userId={chat.userId}
                                        firstName={chat.firstName} lastName={chat.lastName}
                                        avatar={chat.avatar} online={chat.online} message={chat.message}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
            }
        </View>

    )
})

export default ChatList