import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { View } from "react-native"
import { Link } from 'react-router-native'
import { FooterStyle } from '../styles/FooterStyle'

const Footer = () => {
    return (

        <Link underlayColor="none" to='/add-message' style={FooterStyle.footer__link}>
            <View >
                <MaterialCommunityIcons name='pencil' style={{ color: '#fff', fontSize: 20 }} />
            </View>
        </Link>
    )
}

export default Footer