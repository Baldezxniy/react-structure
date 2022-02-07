import { TouchableHighlight, View } from "react-native"
import { useNavigate } from "react-router-native"
import ResentSearchItemChatAvatar from "./ResentSearchItemChatAvatar"
import ResentSearchItemChatOnline from "./ResentSearchItemChatOnline"
import ResentSearchItemChatName from "./ResentSearchItemChatName"
import { SearchStyles } from "../../styles/SearchStyles"
import ModalClearChat from "./ModalClearChat"
import { useState } from 'react'

const ResentSearchChatItem = ({ avatar, chatId, firstName, lastName, online, userId }) => {
    const [clearModal, setClearModal] = useState(false)
    const openModal = () => { setClearModal(true) }
    const closeModal = () => { setClearModal(false) }

    const navigate = useNavigate()

    return (
        <>
            <ModalClearChat clearMode='clearChat' clearModal={clearModal} chatId={chatId} firstName={firstName} lastName={lastName} closeModal={closeModal} />
            <TouchableHighlight
                onLongPress={openModal}
                delayLongPress={100}
                onPress={() => navigate('/chat')}
                to='/chat' style={SearchStyles.list__item__chat}>
                <>
                    <ResentSearchItemChatAvatar avatar={avatar} />
                    <View style={{ marginLeft: 13, flexGrow: 1 }}>
                        <ResentSearchItemChatName firstName={firstName} lastName={lastName} />
                        <ResentSearchItemChatOnline online={online} />
                        <View style={{ borderStyle: 'solid', borderWidth: 0.7, borderColor: 'rgba(0, 0, 0, 0.2)' }}>

                        </View>
                    </View>
                </>
            </TouchableHighlight>
        </>
    )
}

export default ResentSearchChatItem