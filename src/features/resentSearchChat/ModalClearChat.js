import { Modal, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { clearFullHistoryTC, clearHistoryChatTC } from "./resentSearchChatSlice"
import { useTranslation } from 'react-i18next';


const ModalClearChat = ({ clearMode, chatId, firstName, lastName, clearModal, closeModal }) => {
    const dispatch = useDispatch()
    const clearHandle = () => {
        dispatch(clearHistoryChatTC({ chatId }))
        closeModal()
    }
    const clearFullHandle = () => {
        dispatch(clearFullHistoryTC())
    }
    const { t } = useTranslation()



    const name = `${firstName}${lastName ? ` ${lastName}` : ''}`

    const clearTitle = () => {
        switch (clearMode) {
            case 'clearChat': {
                return (
                    <Text style={{ fontWeight: '700', fontSize: 19 }}>
                        {t("search.modal.searhHistory.title")}
                    </Text>
                )
            } case 'clearFullChats': {
                return (
                    <Text style={{ fontWeight: '700', fontSize: 19 }}>
                        {t("search.modal.clearSearhHistory.title")}
                    </Text>
                )
            }
        }
    }
    const clearText = () => {
        switch (clearMode) {
            case 'clearChat': {
                return (
                    <Text style={{ fontSize: 15.5 }}>
                        {t("search.modal.searhHistory.text", { name })}
                    </Text>
                )
            } case 'clearFullChats': {
                return (
                    <Text style={{ fontSize: 15.5 }}>
                        {t("search.modal.clearSearhHistory.text")}
                    </Text>
                )
            }
        }
    }
    const clearButton = () => {
        switch (clearMode) {
            case 'clearChat': {
                return (
                    <TouchableOpacity onPress={clearHandle} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
                        <Text style={{ color: '#fa143e' }}>
                            {t("search.modal.searhHistory.button2")}
                        </Text>
                    </TouchableOpacity>
                )
            } case 'clearFullChats': {
                return (
                    <TouchableOpacity onPress={clearFullHandle} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
                        <Text style={{ color: '#fa143e' }}>
                            {t("search.modal.clearSearhHistory.button2")}
                        </Text>
                    </TouchableOpacity>
                )
            }
        }
    }

    return (
        <Modal
            transparent={true}
            visible={clearModal}

        >
            <TouchableHighlight underlayColor='none' onPressOut={closeModal} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableHighlight underlayColor='none' style={{ padding: 20, backgroundColor: '#26262e', width: 320, borderRadius: 5 }}>
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: 'center' }}>
                                {clearTitle()}
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {clearText()}
                        </View>

                        <View style={{ justifyContent: 'flex-end', flexDirection: "row", marginTop: 10 }}>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={closeModal} style={{ borderRadius: 5, borderColor: '#288afa', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#288afa' }}>
                                        {t("search.modal.button1")}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                {
                                    clearButton()
                                }
                            </View>
                        </View>
                    </>
                </TouchableHighlight>


            </TouchableHighlight>
        </Modal >
    )
}

export default ModalClearChat