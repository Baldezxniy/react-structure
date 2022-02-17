import { Text, TouchableOpacity, View } from "react-native"
import { userStyle } from "../../styles/userStyles"
import { useTranslation } from 'react-i18next';

const RenderItem = ({ title, color, borderBottomWidth, onPress, content }) => {
    const { t } = useTranslation();

    return (
        <>
            {content &&
                <TouchableOpacity onPress={onPress} style={[userStyle.folders__item,]}>
                    <>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[userStyle.folders__item__text, color]}>
                                {t(title)}
                            </Text>
                        </View>
                        <View style={[{ borderBottomWidth: borderBottomWidth }, userStyle.active__folders__item]}/>
                    </>
                </TouchableOpacity>}
        </>
    )
}

export default RenderItem