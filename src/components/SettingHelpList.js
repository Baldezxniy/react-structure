import { memo } from "react";
import { FlatList, Text, View } from "react-native";
import { HELP_DATA } from "../assets/setting/helpDATA";
import SettingRenderItem from "./SettingRenderItem";

const SettingHelpList = memo(() => {

    const renderItem = ({ item }) => {
        return (
            <SettingRenderItem listMode='help' iconName={item.iconName} Icon={item.Icon} title={item.title} modal={item.modal} id={item.id} />
        )
    }
    return (
        <View>
            <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                <Text style={{ color: '#4169E1', fontSize: 14, fontWeight: '700' }}>
                    Помощь
                </Text>
            </View>
            <View>
                <FlatList
                    data={HELP_DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
})

export default SettingHelpList