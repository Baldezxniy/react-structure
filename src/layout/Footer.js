import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons'
import { Text, View } from "react-native"
import { Link } from 'react-router-native'
import { FooterStyle } from '../styles/FooterStyle'

const Footer = () => {
    return (
        <View style={FooterStyle.footer__container}>
            <Text style={FooterStyle.footer__text}>
                Нажмите на карандаш для начала общения
            </Text>
            <View>
                <MaterialIcons name='arrow-forward-ios' style={{ marginLeft: 8, color: '#fff', position: 'relative', top: 0, left: -1 }} />
            </View>
            <Link underlayColor="none" to='/add-message' style={FooterStyle.footer__link}>
                <View >
                    <MaterialCommunityIcons name='pencil' style={{ color: '#fff', fontSize: 20 }} />
                </View>
            </Link>
        </View>
    )
}

export default Footer