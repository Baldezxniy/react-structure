import { memo, useEffect } from "react"
import { ActivityIndicator, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useChatList } from "../../apiHook/useChatList"
import ChatListItem from "./ChatListItem"
import { getChatLIstTC } from "./chatListSlice"
import { getChats, getLoader } from "./chatsSelector"

const ChatList = memo(({ setSelectArr, openSelect, select, selectArr, setUserDeleteChat }) => {
    const dispatch = useDispatch()
    const chats = useChatList()
    useEffect(() => {
        dispatch(getChatLIstTC(chats))
    }, [])
    const loader = useSelector(getLoader)

    const stateChat = useSelector(getChats)
    return (
        <View >
            {
                loader ?
                    < View >
                        {
                            stateChat.map(chat => {
                                return (
                                    <ChatListItem setUserDeleteChat={setUserDeleteChat}
                                        selectArr={selectArr} openSelect={openSelect}
                                        setSelectArr={setSelectArr} key={chat.chatId}
                                        chatId={chat.chatId} userId={chat.userId} select={select}
                                        firstName={chat.firstName} lastName={chat.lastName}
                                        avatar={chat.avatar} online={chat.online} message={chat.message}
                                    />
                                )
                            })
                        }
                    </View>
                    :
                    <View style={{ alignItems: 'center' }}>
                        <ActivityIndicator size="large" />
                    </View>
            }
        </View>

    )
})

export default ChatList