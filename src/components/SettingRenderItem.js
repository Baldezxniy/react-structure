import { memo } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { settingStyle } from "../assets/setting/settingStyle";

const SettingRenderItem = memo(({ iconName, Icon, title, modal, id, listMode }) => {
   
    const borderBottomWidth = listMode === 'setting'? id !== 7 ? 1 : 0 : id !== 3? 1 : 0
            
    return (
        <TouchableHighlight underlayColor='#000' onPress={() => (modal)} style={settingStyle.setting__item}>
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
    )
})


export default SettingRenderItem