import { View } from "react-native";
import { Link } from "react-router-native";
import { stylesHeader } from "../styles/headerStyle";
import { Ionicons } from 'react-native-vector-icons'
import { TouchableHighlight } from "react-native";

export const ContactaBackArrow = ({ headerMode, setHeaderMode }) => (
    <>
        {
            headerMode === 'contact' && <View style={stylesHeader.header__left__buttom}>
                <Link to='/'>
                    <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                </Link>
            </View>
        }
        {
            headerMode === 'search-contact-mode' && <View style={stylesHeader.header__left__buttom}>
                <TouchableHighlight onPress={() => setHeaderMode("contact")}>
                    <Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
                </TouchableHighlight>
            </View>
        }
    </>
)