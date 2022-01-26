import { memo } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { settingStyle } from "../assets/setting/settingStyle";
import {FontAwesome5, Ionicons} from 'react-native-vector-icons'


export const SettingMenu = memo(({ openMenu, closeMenuHandler, openEditNameHeandler }) => {


    const openEditName = () => {
        openEditNameHeandler();
        closeMenuHandler()
    }
    return (
        <>
            {openMenu &&
                <TouchableHighlight underlayColor="none" onPressIn={closeMenuHandler} style={settingStyle.menu__body}>
                    <View style={settingStyle.menu}>
                        <TouchableHighlight underlayColor="none" onPress={openEditName} style={settingStyle.menu__item}>
                            <>
                                <View style={settingStyle.menu__item__icon__block}>
                                    <FontAwesome5 name='pen' style={{ fontSize: 17 }} />
                                </View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 17 }}>
                                        Изменить имя
                                    </Text>
                                </View>
                            </>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="none" style={settingStyle.menu__item}>
                            <>
                                <View style={settingStyle.menu__item__icon__block}>
                                    <Ionicons name='ios-camera-outline' style={{ fontSize: 24 }} />
                                </View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 17 }}>
                                        Выбрать фотографию
                                    </Text>
                                </View>
                            </>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor="none" style={settingStyle.menu__item}>
                            <>
                                <View style={settingStyle.menu__item__icon__block}>
                                    <Ionicons name='exit-outline' style={{ fontSize: 21 }} />
                                </View>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 17 }}>
                                        Выход
                                    </Text>
                                </View>
                            </>
                        </TouchableHighlight>
                    </View>
                </TouchableHighlight >}
        </>
    )
})


export default SettingMenu