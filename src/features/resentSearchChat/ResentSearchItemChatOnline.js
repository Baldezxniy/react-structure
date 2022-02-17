import { Text, View } from "react-native"
import {useTranslation} from 'react-i18next'


const ResentSearchItemChatOnline = ({online}) => {
    const {t} = useTranslation()
    return (
        <View style={{  marginVertical:5 }}>
            {
                online ?
                    <Text style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                        {t("search.recentItem.online")}
                    </Text>
                    :
                    <Text style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                        {t("search.recentItem.recently")}
                    </Text>
            }
        </View>
    )
}

export default ResentSearchItemChatOnline