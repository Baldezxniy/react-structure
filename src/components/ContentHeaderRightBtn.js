import { stylesHeader } from "../styles/headerStyle";
import { Feather, Fontisto } from 'react-native-vector-icons'
import { View, TouchableHighlight } from "react-native";
export const ContentHeaderRightBtn = ({ setSortMode, setHeaderMode }) => (
    <View style={stylesHeader.header__right__buttom}>
        <TouchableHighlight onPress={() => setHeaderMode('search-contact-mode')}>
            <Feather name='search' style={{ color: '#fff', fontSize: 20, marginRight: 20 }} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => setSortMode(prev => !prev)}>
            <Fontisto name='left-align' style={{ color: '#fff', fontSize: 15 }} />
        </TouchableHighlight>
    </View>
)