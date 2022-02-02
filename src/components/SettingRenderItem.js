import { memo } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { settingStyle } from "../styles/settingStyle";

const SettingRenderItem = memo(({ iconName, Icon, title, modal, id, border }) => {

    const containerBorderBottomWidth = id === 7 ? 15 : 0
    const borderBottomWidth = border ? 0.7 : 0


    return (
        <>
            <TouchableHighlight underlayColor='#000' onPress={() => (modal)} style={[settingStyle.setting__item]}>
                <>
                    <View style={{ marginRight: 30 }}>
                        <Text>
                            <Icon name={iconName} style={{ fontSize: 20 }} />
                        </Text>
                    </View>
                    <View style={[settingStyle.setting__text__box, { borderBottomWidth: borderBottomWidth }]}>
                        <Text>
                            {title}
                        </Text>
                    </View>
                </>
            </TouchableHighlight>
            <View style={{ borderBottomWidth: containerBorderBottomWidth, borderColor: 'rgba(0, 0, 0, 0.4)' }}>

            </View>
        </>
    )
})


export default SettingRenderItem