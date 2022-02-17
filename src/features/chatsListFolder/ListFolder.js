import { ScrollView, Text, View } from "react-native"
import { mainStyles } from "../../styles/mainStyles"
import { useTranslation } from 'react-i18next';

const ListFolder = () => {
    const { t, i18n } = useTranslation()
    return (
        <View style={[mainStyles.row__container, { backgroundColor: '#282045' }]}>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <View style={mainStyles.folders__item}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={mainStyles.folders__item__text}>
                            {t("main.folders")}
                        </Text>
                        <View style={mainStyles.folders__item__bedge}>
                            <Text style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1, fontSize: 10, }}>
                                99+
                            </Text>
                        </View>
                    </View>
                    <View style={mainStyles.active}>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ListFolder