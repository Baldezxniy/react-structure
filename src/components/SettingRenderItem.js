import { memo } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { settingStyle } from "../styles/settingStyle";

const SettingRenderItem = memo(({ t, iconName, Icon, title, setModal, id, border }) => {

    const containerBorderBottomWidth = id === 7 ? 15 : 0
    const borderBottomWidth = border ? 0.7 : 0


    return (
        <>
            {
                id === 8 &&
                <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                    <Text style={{ color: '#4169E1', fontSize: 14, fontWeight: '700' }}>
                        {t("setting.help.title")}
                    </Text>
                </View>
            }
            <TouchableHighlight underlayColor='#000' onPress={() => setModal(true)} style={[settingStyle.setting__item]}>
                <>
                    <View style={{ marginRight: 30 }}>
                        <Text>
                            <Icon name={iconName} style={{ fontSize: 20 }} />
                        </Text>
                    </View>
                    <View style={[settingStyle.setting__text__box, { borderBottomWidth: borderBottomWidth }]}>
                        <Text>
                            {t(title)}
                        </Text>
                    </View>
                </>
            </TouchableHighlight>
            <View style={{ borderBottomWidth: containerBorderBottomWidth, borderColor: 'rgba(0, 0, 0, 0.4)' }} />
        </>
    )
})


export default SettingRenderItem