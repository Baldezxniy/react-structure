import { Modal, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { clearFullHistoryTC, clearHistoryChatTC } from "./resentSearchChatSlice"


const ModalClearChat = ({ clearMode, chatId, firstName, lastName, clearModal, closeModal }) => {
    const dispatch = useDispatch()
    const clearHandle = () => {
        dispatch(clearHistoryChatTC({ chatId }))
        closeModal()
    }
    const clearFullHandle = () => {
        dispatch(clearFullHistoryTC())
    }
    const clearTitle = () => {
        switch (clearMode) {
            case 'clearChat': {
                return (
                    <Text style={{ fontWeight: '700', fontSize: 19 }}>
                        История поиска
                    </Text>
                )
            } case 'clearFullChats': {
                return (
                    <Text style={{ fontWeight: '700', fontSize: 19 }}>
                        Очистить историю поиска
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
                        Вы хотите удалить "{`${firstName}${lastName ? ` ${lastName}` : ''}`}" из истории поиска ?
                    </Text>
                )
            } case 'clearFullChats': {
                return (
                    <Text style={{ fontSize: 15.5 }}>
                        Вы точно хотите очистить историю поиска?
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
                            УБРАТЬ
                        </Text>
                    </TouchableOpacity>
                )
            } case 'clearFullChats': {
                return (
                    <TouchableOpacity onPress={clearFullHandle} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
                        <Text style={{ color: '#fa143e' }}>
                            ОЧИСТИТЬ
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
                                        ОТМЕНА
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