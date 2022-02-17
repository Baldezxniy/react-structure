import { useState } from "react";
import { memo } from "react";
import { Modal, Text, TouchableHighlight, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { DeleteMessageBtn } from "../features/chatMessage/DeleteMessageBtn";
import { DeletePhotoBtn } from "../features/userProfileContent/DeletePhotoBtn";
import { useTranslation } from 'react-i18next';

const ModalDelete = memo(({ userName, modal, closeModal, messageArr, zeroingMessageArr, deleteMode, setMessageArr }) => {
    const { t } = useTranslation();

    const deleteButton = () => {
        switch (deleteMode) {
            case 'message': {
                return (
                    <DeleteMessageBtn zeroingMessageArr={zeroingMessageArr} messageArr={messageArr} check={check} />
                )
            } case 'content': {
                return (
                    <DeletePhotoBtn messageArr={messageArr} check={check} setMessageArr={setMessageArr} />
                )
            }
        }
    }
    const [check, setCheck] = useState(false)

    const name = `${userName.firstName}${userName.lastName ? userName.lastName : ''}` ? `${userName.firstName}${userName.lastName ? userName.lastName : ''}` : null
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
                                    {messageArr.length === 1 ?


                                        t('modalDeleteMessage.title', { context: 'One' })
                                        :
                                        t('modalDeleteMessage.title', { context: `Other`, count: messageArr.length })


                                    }

                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>

                            <Text style={{ fontSize: 14.5 }}>
                                {
                                    messageArr.length === 1 ?
                                        t("modalDeleteMessage.text", { context: 'One' })
                                        :
                                        t("modalDeleteMessage.text", { context: 'Other' })
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
                                    {t("modalDeleteMessage.checkBox", { name })}
                                </Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'flex-end', flexDirection: "row", marginTop: 15 }}>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={closeModal} style={{ borderRadius: 5, borderColor: '#288afa', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#288afa' }}>
                                        {t("modalDeleteMessage.button1")}
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