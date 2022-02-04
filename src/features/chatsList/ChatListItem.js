import { TouchableHighlight, View } from "react-native"
import { Link } from "react-router-native"
import CheckedMessage from "./CheckedMessage"
import LastMessage from "./LastMessage"
import LastMessageTime from "./LastMessageTime"
import UserName from "./UserName"
import { AntDesign } from 'react-native-vector-icons'
import { stylesUserItemLIst } from "../../styles/userListStyles"
import UserAavatar from "./UserAvatar"
import ModalDelete from "./ModalDelete"
import { useState } from "react"


const ChatListItem = ({ avatar, firstName, lastName, online, message, chatId }) => {
    const [chatDelete, setChatDelete] = useState(false)
    const openDelete = () => { setChatDelete(true) }
    const closeDelete = () => { setChatDelete(false) }
    return (

        <>
            <ModalDelete chatDelete={chatDelete} avatar={avatar} firstName={firstName} lastName={lastName} chatId={chatId} closeDelete={closeDelete} />
            <Link onLongPress={openDelete} to='/chat'>

                <View style={stylesUserItemLIst.item__container}>
                    <UserAavatar avatar={avatar} online={online} />
                    <View style={{ flexGrow: 1 }} >
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
            </Link>

            </>
    )
}

export default ChatListItem