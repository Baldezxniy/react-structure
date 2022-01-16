import { TouchableHighlight, View } from "react-native"
import {Feather} from 'react-native-vector-icons'
import { styles } from "../../../assets/main/headerStyle"

const HeadeMenuButtom = ({showMenuAnimatedOn})=>{
    return (
        <View style={styles.header__menu} >
				<TouchableHighlight onPress={() => { showMenuAnimatedOn() }} >
					<Feather name='menu' style={{ fontSize: 25, color: '#fff' }} />
				</TouchableHighlight>
			</View>
    )
}


export default HeadeMenuButtom