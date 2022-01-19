import { TouchableHighlight, View } from "react-native"
import {Feather} from 'react-native-vector-icons'
import { stylesHeader } from "../assets/headerStyle"

const HeadeMenuButtom = ({showMenuAnimatedOn})=>{
    return (
        <View style={stylesHeader.header__left__buttom} >
				<TouchableHighlight onPress={() => { showMenuAnimatedOn() }} >
					<Feather name='menu' style={{ fontSize: 25, color: '#fff' }} />
				</TouchableHighlight>
			</View>
    )
}


export default HeadeMenuButtom