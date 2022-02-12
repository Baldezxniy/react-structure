import { useState } from "react"
import { TouchableHighlight } from "react-native"
import ModalDelete from "../../components/ModalDelete"
import { Ionicons } from 'react-native-vector-icons'


export const UserProfileDeleteMessage = ({ userName, photoArr, setPhotoArr }) => {
    const [modal, setModal] = useState(false)
    const openModal = () => { setModal(true) }
    const closeModal = () => { setModal(false) }
    return (
        <>
            <ModalDelete deleteMode='content' photoArr={photoArr} userName={userName} modal={modal} closeModal={closeModal} setPhotoArr={setPhotoArr} />
            <TouchableHighlight onPress={openModal}>
                <Ionicons name='trash-outline' style={{ fontSize: 18 }} />
            </TouchableHighlight>
        </>
    )
}