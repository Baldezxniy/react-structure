import { memo, useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { ModalCopy } from "../../components/ModalCopy";
import { settingStyle } from "../../styles/settingStyle";
import { getDiscription, getTelephone, getUserName } from "./profileSelector";
import SettingDataDiscription from "./SettingDataDiscription";
import SettingDataPhone from "./SettingDataPhone";
import SettingDataUserName from "./SettingDataUserName";

const SettingDataList = memo(({ openEditUserNameHeandler, openEditDiscriptionHeandler }) => {

    const [openCopy, setOpenCopy] = useState(false)
    const [textCopy, setTextCopy] = useState('')
    const telephone = useSelector(getTelephone)
    const userName = useSelector(getUserName)
    const discription = useSelector(getDiscription)

    return (
        <View style={settingStyle.data__container}>

            <ModalCopy openCopy={openCopy} setOpenCopy={setOpenCopy} textCopy={textCopy} setTextCopy={setTextCopy} />

            <View >
                <View style={{ marginLeft: 20, paddingTop: 10 }}>
                    <Text style={{ color: '#4169E1', fontSize: 14, fontWeight: '700' }}>
                        Аккаунт
                    </Text>
                </View>
                <View>
                    <TouchableHighlight
                        delayLongPress={100}
                        onLongPress={() => {
                            setOpenCopy(true)
                            setTextCopy(telephone)
                        }}
                    >
                        <View style={settingStyle.data__item}>
                            <SettingDataPhone />
                            <View>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 12, marginTop: 5 }}>
                                    Нажмите чтобы изменить номер
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        delayLongPress={100}
                        onLongPress={() => {
                            setOpenCopy(true)
                            setTextCopy(userName)
                        }}
                        onPress={openEditUserNameHeandler}
                    >
                        <View style={settingStyle.data__item}>
                            <SettingDataUserName />
                            <View>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 12, marginTop: 5 }}>
                                    Имя пользователя
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight
                        delayLongPress={100}
                        onPress={openEditDiscriptionHeandler}
                        onLongPress={() => {
                            setOpenCopy(true)
                            setTextCopy(discription)

                        }}
                    >

                        <View style={{ marginLeft: 20, paddingBottom: 13, marginTop: 10 }} >
                            <SettingDataDiscription />
                            <View>
                                {discription ?
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                                        О себе
                                    </Text>
                                    :
                                    <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                                        Напишите немного о себе
                                    </Text>
                                }
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    )
})

export default SettingDataList