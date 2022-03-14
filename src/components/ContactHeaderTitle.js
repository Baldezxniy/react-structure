import { Text, View } from "react-native";
import { stylesHeader } from "../styles/headerStyle";

export const ContactHeaderTitle = () => (
    <View style={stylesHeader.header__content}>
        <Text style={{ color: '#fff', fontSize: 19, paddingLeft: 20, fontWeight: '600' }}>
            Контакты
        </Text>
    </View>
) 