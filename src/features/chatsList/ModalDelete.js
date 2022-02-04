import { useState } from "react";
import { Image, Modal, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { useDispatch } from "react-redux";
import { deleteChatTC } from "./chatListSlice";

const ModalDelete = ({ chatId, chatDelete, closeDelete, avatar, firstName, lastName }) => {
    const [check, setChecked] = useState(false)

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteChatTC({ chatId, deleteToFriend: check }))
        closeDelete()
    }
    return (
        <Modal
            transparent={true}
            visible={chatDelete}

        >
            <TouchableHighlight underlayColor='none' onPressOut={closeDelete} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>


                <TouchableHighlight underlayColor='none' style={{ padding: 20, backgroundColor: 'grey', width: 320, borderRadius: 5 }}>
                    <>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: 60 }}>
                                <Image source={{ uri: avatar }} style={{ height: 45, width: 45, borderRadius: 50 }} />
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 19 }}>
                                    Удалить чат
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ fontSize: 15.5 }}>
                                Вы точно хотите удалить чат с <Text style={{ fontWeight: '700' }}>{`${firstName} ${lastName}`}</Text> ?
                            </Text>
                        </View>
                        <TouchableHighlight underlayColor='none' onPress={() => setChecked(!check)} style={{ flexDirection: "row", marginTop: 20 }}>
                            <>
                                <View style={{ marginRight: 10 }}>
                                    <View style={{ width: 21, height: 21, justifyContent: "center", alignItems: "center", backgroundColor: check ? '#2c32f2' : 'grey', borderWidth: 1, borderRadius: 4, borderColor: '#dadbf2' }}>
                                        {check && <MaterialCommunityIcons name='check' style={{ fontSize: 18 }} />}
                                    </View>
                                </View>
                                <View>
                                    <Text>
                                        Также для {`${firstName} ${lastName}`}
                                    </Text>
                                </View>
                            </>
                        </TouchableHighlight>
                        <View style={{ justifyContent: 'flex-end', flexDirection: "row", marginTop: 10 }}>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress={closeDelete} style={{ borderRadius: 5, borderColor: '#288afa', borderWidth: 0.5, padding: 5 }}>
                                    <Text style={{ color: '#288afa' }}>
                                        ОТМЕНА
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity onPress={handleDelete} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
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
}
export default ModalDelete

