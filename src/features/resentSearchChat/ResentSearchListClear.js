import { useState } from "react"
import { Text, TouchableHighlight, View } from "react-native"
import ModalClearChat from "./ModalClearChat"
import { useTranslation } from 'react-i18next';

const ResentSearchListClear = () => {
    const {t} = useTranslation()
    const [clearModal, setClearModal] = useState(false)
    const openModal = () => { setClearModal(true) }
    const closeModal = () => { setClearModal(false) }

    return (
        <>
            <ModalClearChat  clearMode='clearFullChats' closeModal={closeModal} clearModal={clearModal} />
            <View style={{ backgroundColor: '#272830', height: 25, flexDirection: "row", paddingHorizontal: 15 }}>
                <View style={{justifyContent:"center"}}>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '200' }}>
                        {t("search.recent.recent")}
                    </Text>
                </View>
                <TouchableHighlight onPress={openModal} underlayColor='none' style={{ justifyContent: 'center', alignItems: 'flex-end', flexGrow: 1 }}>
                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontWeight: '200' }}>
                        {t("search.recent.clear")}
                    </Text>
                </TouchableHighlight>
            </View>
        </>

    )
}

export default ResentSearchListClear