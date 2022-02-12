import { useState } from "react"
import { memo } from "react"
import { TouchableHighlight } from "react-native"
import ModalDelete from "../../components/ModalDelete"
import { AntDesign } from 'react-native-vector-icons'

const DeleteMessage = memo(({ userName, messageArr, zeroingMessageArr }) => {
    const [modal, setModal] = useState(false)
    const openModal = () => { setModal(true) }
    const closeModal = () => { setModal(false) }

    return (
        <>
            <ModalDelete deleteMode='message' zeroingMessageArr={zeroingMessageArr} messageArr={messageArr} userName={userName} modal={modal} closeModal={closeModal} />
            <TouchableHighlight onPress={openModal}>
                <AntDesign name='delete' style={{ fontSize: 22 }} />
            </TouchableHighlight>
        </>
    )
})

export default DeleteMessage