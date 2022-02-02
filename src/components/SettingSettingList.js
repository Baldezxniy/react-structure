import { memo } from "react";
import { FlatList, Text, View } from "react-native";
import { settingStyle } from "../styles/settingStyle";
import { SETTING_DATA } from "./settingDATA";
import SettingRenderItem from "./SettingRenderItem";


const SettingSettingList = memo((props) => {
    const renderItem = ({ item }) => {
        return (
            <SettingRenderItem iconName={item.iconName} Icon={item.Icon} title={item.title} modal={item.modal} id={item.id} border={item.border} />
        )
    }

    return (
        <View style={settingStyle.setting__list__container}>
            <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ color: '#4169E1', fontSize: 14, fontWeight: '700' }}>
                    Настройки
                </Text>
            </View>
            <View>

                <FlatList
                    data={SETTING_DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
})

export default SettingSettingList