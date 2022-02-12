import { useState } from "react";
import { memo } from "react";
import { Modal, Text, TouchableHighlight, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { DeleteMessageBtn } from "../features/chatMessage/DeleteMessageBtn";
import { DeletePhotoBtn } from "../features/userProfileContent/DeletePhotoBtn";

const ModalDelete = memo(({ userName, modal, closeModal, messageArr, zeroingMessageArr, deleteMode, photoArr, setPhotoArr }) => {

    const deleteButton = () => {
        switch (deleteMode) {
            case 'message': {
                return (
                    <DeleteMessageBtn zeroingMessageArr={zeroingMessageArr} messageArr={messageArr} check={check} />
                )
            } case 'content': {
                return (
                    <DeletePhotoBtn photoArr={photoArr} check={check} setPhotoArr={setPhotoArr} />
                )
            }
        }
    }
    const [check, setCheck] = useState(false)
    return (
        <Modal
            transparent={true}
            visible={modal}
        >
            <TouchableHighlight underlayColor='none' onPressOut={closeModal} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


                <TouchableHighlight underlayColor='none' style={{ padding: 20, backgroundColor: '#26262e', width: 340, borderRadius: 5 }}>
                    <>
                        <View style={{ flexDirection: "row" }}>

                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 19 }}>
                                    Удалить сообщения
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>

                            <Text style={{ fontSize: 14.5 }}>

                                {
                                    !!messageArr && `Вы точно хотите удалить ${messageArr.length === 1 ? 'это собщения' : "эти сообщения"} ?`
                                }
                                {
                                    !!photoArr && `Вы точно хотите удалить ${photoArr.length === 1 ? 'это собщения' : "эти сообщения"} ?`
                                }
                            </Text>
                        </View>
                        <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center" }}>
                            <View >
                                <TouchableHighlight onPress={() => setCheck(!check)} underlayColor='none' style={{ width: 21, height: 21, justifyContent: "center", alignItems: "center", borderWidth: 1, backgroundColor: check ? '#288afa' : 'rgba(0, 0, 0, 0)', marginRight: 20, borderRadius: 5, borderColor: '#cacffa' }}>
                                    <>
                                        {
                                            check && <MaterialCommunityIcons name='check' style={{ fontSize: 18 }} />
                                        }
                                    </>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <Text>
                                    Тажке удалить для {`${userName.firstName}${userName.lastName ? userName.lastName : ''}`}
                                </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: "row", marginTop: 15 }}>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={closeModal} style={{ borderRadius: 5, borderColor: '#288afa', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#288afa' }}>
                                        ОТМЕНА
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                {deleteButton()}
                            </View>
                        </View>
                    </>
                </TouchableHighlight>


            </TouchableHighlight>
        </Modal >
    )
})

export default ModalDelete