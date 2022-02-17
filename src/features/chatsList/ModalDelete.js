import { useState } from "react";
import { Image, Modal, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { deleteChatTC } from "./chatListSlice";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { useTranslation } from 'react-i18next';


const ModalDelete = ({ chatDelete, closeDelete, selectArr, clearSelect, userDeleteChat }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        clearSelect()
        dispatch(deleteChatTC({ selectArr }))
        closeDelete()
    }
    const [check, setCheck] = useState(false)


    const { t } = useTranslation()

    const handleDeleteClose = () => {
        closeDelete()
        setCheck(false)
    }

    const name = userDeleteChat.length >= 1 ? `${userDeleteChat[0].firstName}${userDeleteChat[0].lastName ? ' ' + userDeleteChat[0].lastName : ''}` : null

    return (
        <Modal
            transparent={true}
            visible={chatDelete}

        >
            <TouchableHighlight underlayColor='none' onPressOut={handleDeleteClose} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


                <TouchableHighlight underlayColor='none' style={{ padding: 20, backgroundColor: '#26262e', width: 320, borderRadius: 5 }}>
                    <>
                        <View style={{ flexDirection: "row" }}>
                            {selectArr.length === 1 && < View style={{ width: 60 }}>
                                <Image source={{ uri: userDeleteChat[0].avatar }} style={{ height: 45, width: 45, borderRadius: 50 }} />
                            </View>}
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 19 }}>
                                    {
                                        selectArr.length !== 1 ?
                                            t("main.modal.deleteChats.title", { count: selectArr.length })
                                            : t("main.modal.deleteChat.title")
                                    }
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            {selectArr.length === 1 ?

                                <Text style={{ fontSize: 15.5 }}>
                                    {t("main.modal.deleteChat.text", { name })}
                                </Text> :
                                <Text style={{ fontSize: 15.5 }}>
                                    {t("main.modal.deleteChats.text")}
                                </Text>}
                        </View>
                        {selectArr.length === 1 && <TouchableHighlight underlayColor='none' onPress={() => setCheck(!check)} style={{ flexDirection: "row", marginTop: 20 }}>
                            <>
                                <View style={{ marginRight: 10 }}>
                                    <View style={{ width: 21, height: 21, justifyContent: "center", alignItems: "center", backgroundColor: check ? '#2c32f2' : 'grey', borderWidth: 1, borderRadius: 4, borderColor: '#dadbf2' }}>
                                        {check && <MaterialCommunityIcons name='check' style={{ fontSize: 18 }} />}
                                    </View>
                                </View>
                                <View>
                                    <Text>
                                        {t("main.modal.deleteChat.checkBox", { name })}
                                    </Text>
                                </View>
                            </>
                        </TouchableHighlight>}
                        <View style={{ justifyContent: 'flex-end', flexDirection: "row", marginTop: 10 }}>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={handleDeleteClose} style={{ borderRadius: 5, borderColor: '#288afa', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#288afa' }}>
                                        {t("main.modal.button1")}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={handleDelete} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#fa143e' }}>
                                        {
                                            selectArr.length === 1 ?
                                                t("main.modal.deleteChat.button2")
                                                :
                                                t("main.modal.deleteChats.button2")
                                        }
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                </TouchableHighlight>


            </TouchableHighlight>
        </Modal >
    )
}
export default ModalDelete

