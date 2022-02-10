import { TouchableHighlight } from "react-native"
import { AntDesign } from 'react-native-vector-icons'
import ModalDelete from "../features/chatsList/ModalDelete"

const DeleteChat = ({ openDelete, closeDelete, chatDelete, selectArr, clearSelect, userDeleteChat }) => {
    return (
        <>
            <ModalDelete userDeleteChat={userDeleteChat} chatDelete={chatDelete} clearSelect={clearSelect} selectArr={selectArr} closeDelete={closeDelete} />
            <TouchableHighlight onPress={openDelete} style={{ marginRight: 20 }}>
                <AntDesign name='delete' style={{ color: '#fff', fontSize: 22 }} />
            </TouchableHighlight>

        </>)
}

export default DeleteChat