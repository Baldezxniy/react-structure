import { useState } from "react"
import { TouchableHighlight } from "react-native"
import { Link, useNavigate } from "react-router-native"
import { SearchStyles } from "../../styles/SearchStyles"
import ModalDeleteUser from "./ModalDeleteUser"
import RecentUserAvatar from "./RecentUserImg"
import RecentUserName from "./RecentUserName"

const RecentUserItem = ({ userId, chatId, firstName, avatar, online }) => {
    const navigate = useNavigate()
    const [deleteModal, setDeleteModal] = useState(false)
    const openModal = () => { setDeleteModal(true) }
    const closeModal = () => { setDeleteModal(false) }
    return (
        <>
            <ModalDeleteUser deleteModal={deleteModal} closeModal={closeModal} firstName={firstName} userId={userId} />
            <TouchableHighlight onPress={() => {
                navigate('/chat')
            }}
                onLongPress={openModal} style={SearchStyles.profille__list__item}>
                <>
                    <RecentUserAvatar avatar={avatar} online={online} />
                    <RecentUserName firstName={firstName} />
                </>
            </TouchableHighlight>
        </>
    )
}

export default RecentUserItem