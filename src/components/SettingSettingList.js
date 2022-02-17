import { memo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import ModalLanguage from "../features/profile/ModalLanguage";
import { settingStyle } from "../styles/settingStyle";
import { SETTING_DATA } from "./settingDATA";
import SettingRenderItem from "./SettingRenderItem";
import { useTranslation } from 'react-i18next';


const SettingSettingList = memo((props) => {
    const { t } = useTranslation();

    const [lngModal, setLngModal] = useState(false)

    return (
        <>
            <ModalLanguage lngModal={lngModal} setLngModal={setLngModal} />
            <View style={settingStyle.setting__list__container}>
                <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                    <Text style={{ color: '#4169E1', fontSize: 14, fontWeight: '700' }}>
                        {t("setting.settings.title")}
                    </Text>
                </View>
                <View>
                    {
                        SETTING_DATA.map(item => {
                            const modalSwitch = () => {
                                switch (item.modal) {
                                    case 'language': {
                                        return setLngModal
                                    }
                                }
                                return (boll) => null
                            }
                            return <SettingRenderItem key={item.title} t={t} iconName={item.iconName} Icon={item.Icon} title={item.title} setModal={modalSwitch()} id={item.id} border={item.border} />

                        })
                    }

                </View>
            </View>
        </>
    )
})

export default SettingSettingList