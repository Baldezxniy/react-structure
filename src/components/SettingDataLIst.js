import { memo } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { settingStyle } from "../assets/setting/settingStyle";
import SettingDataDiscription from "../features/settingData/SettingDataDiscription";
import SettingDataPhone from "../features/settingData/SettingDataPhone";
import SettingDataUserName from "../features/settingData/SettingDataUserName";

const SettingDataList = memo(({  openEditUserNameHeandler, openEditDiscriptionHeandler, setOpenCopy}) => {
    return (
        <View style={settingStyle.data__container}>
            <View >
                <View style={{ marginLeft: 20, paddingTop: 10 }}>
                    <Text style={{ color: '#4169E1', fontSize: 14, fontWeight: '700' }}>
                        Аккаунт
                    </Text>
                </View>
                <View>

                    <View style={settingStyle.data__item}>
                        <SettingDataPhone />
                        <View>
                            <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 12, marginTop: 5 }}>
                                Нажмите чтобы изменить номер
                            </Text>
                        </View>
                    </View>
                    <TouchableHighlight
                        delayLongPress={100}
                        onLongPress={() => {
                            setOpenCopy(true)
                        }}
                        onPress={openEditUserNameHeandler}>
                        <View style={settingStyle.data__item}>
                            <SettingDataUserName />
                            <View>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 12, marginTop: 5 }}>
                                    Имя пользователя
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={openEditDiscriptionHeandler} >
                        <View style={{ marginLeft: 20, paddingBottom: 13, marginTop: 10 }} >
                            <SettingDataDiscription />
                            <View>
                                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                                    О себе
                                </Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    )
})

export default SettingDataList