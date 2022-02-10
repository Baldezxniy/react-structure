import { memo } from "react"
import { Modal, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"
import { deleteUserTC } from "./recentSearchUserSlice"

const ModalDeleteUser = memo(({ deleteModal, closeModal, firstName, lastName, userId }) => {


    const dispatch = useDispatch()
    const deleteHandle = () => {
        dispatch(deleteUserTC({ userId }))
    }
    return (
        <Modal
            transparent={true}
            visible={deleteModal}

        >
            <TouchableHighlight underlayColor='none' onPressOut={closeModal} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <TouchableHighlight underlayColor='none' style={{ padding: 20, backgroundColor: '#26262e', width: 320, borderRadius: 5 }}>
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 19 }}>
                                    Скрыть подсказку
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 15.5 }}>
                                Вы точно хотите скрыть {`${firstName}${lastName ? ` ${lastName}` : ''}`} из подсказок ?
                            </Text>
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
                                <TouchableOpacity onPress={deleteHandle} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#fa143e' }}>
                                        УДАЛИТЬ
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                </TouchableHighlight>


            </TouchableHighlight>
        </Modal >
    )
})

export default ModalDeleteUser