import { useState } from "react"
import { Text, TouchableHighlight, View } from "react-native"
import { useDispatch } from "react-redux"
import ModalClearChat from "./ModalClearChat"
import { clearFullHistoryTC } from "./resentSearchChatSlice"

const ResentSearchListClear = () => {


    const [clearModal, setClearModal] = useState(false)
    const openModal = () => { setClearModal(true) }
    const closeModal = () => { setClearModal(false) }

    return (
        <>
            <ModalClearChat clearMode='clearFullChats' closeModal={closeModal} clearModal={clearModal}/>
            <View style={{ backgroundColor: '#272830', height: 25, flexDirection: "row", paddingHorizontal: 15 }}>
                <View>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '200' }}>
                        Недавние
                    </Text>
                </View>
                <TouchableHighlight onPress={openModal} underlayColor='none' style={{ justifyContent: 'center', alignItems: 'flex-end', flexGrow: 1 }}>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '200' }}>
                        Очистить
                    </Text>
                </TouchableHighlight>
            </View>
        </>

    )
}

export default ResentSearchListClear