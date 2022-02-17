import { TouchableHighlight, View } from "react-native"
import CheckedMessage from "./CheckedMessage"
import LastMessage from "./LastMessage"
import LastMessageTime from "./LastMessageTime"
import UserName from "./UserName"
import { AntDesign } from 'react-native-vector-icons'
import { stylesUserItemLIst } from "../../styles/userListStyles"
import UserAavatar from "./UserAvatar"
import { memo } from "react"
import { useNavigate } from "react-router-native";


const ChatListItem = memo(({ avatar, firstName, lastName, online, message,
    chatId, setSelectArr, openSelect, select, selectArr, setUserDeleteChat, lastItem }) => {


    const navigate = useNavigate()

    return (

        <>
            <TouchableHighlight
                onPress={() => {
                    debugger
                    if (select) {

                        if (!selectArr.includes(chatId)) {
                            setUserDeleteChat(prev => [...prev, { avatar, firstName, lastName, chatId }])
                            setSelectArr(prev => [...prev, chatId])
                        } else {
                            setSelectArr(prev => prev.filter(chat => chat !== chatId))
                            setUserDeleteChat(prev => prev.filter(chat => chat.chatId !== chatId))
                        }
                    } else {
                        navigate('/chat')
                    }
                }}
                onLongPress={() => {
                    if (!select) {
                        openSelect()
                        setUserDeleteChat([{ avatar, firstName, lastName, chatId }])
                        setSelectArr(prev => [...prev, chatId])
                    }
                }}
            >

                <View style={stylesUserItemLIst.item__container}>
                    <UserAavatar avatar={avatar} online={online} select={select} selectArr={selectArr} chatId={chatId} />
                    <View style={{ flexGrow: 1, borderBottomWidth: lastItem ? 0.6 : 0, paddingBottom: 10, paddingRight: 15, }} >
                        <View style={stylesUserItemLIst.item__name}>
                            <UserName firstName={firstName} lastName={lastName} />
                            <View style={{ flexDirection: 'row' }}>
                                {message.my && <CheckedMessage checked={message.checked} />}
                                <LastMessageTime time={message.time} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <LastMessage text={message.text} />
                            <View style={stylesUserItemLIst.item__pushpin}>
                                <AntDesign name='pushpin' style={stylesUserItemLIst.pushpin} />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>

        </>
    )
})

export default ChatListItem