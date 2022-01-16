
import {View } from 'react-native';
import { styles } from '../../../assets/main/headerStyle';
import  HeaderLogo  from './HeaderLogo';
import HeadeMenuButtom from './HeaderMenuButtom';
import  HeaderSearchButtom  from './HeaderSearchButtom';


const MainHeader = ({ showMenuAnimatedOn }) => {


	return (
		<View style={styles.header}>
			<HeadeMenuButtom showMenuAnimatedOn={showMenuAnimatedOn} />
			<HeaderLogo />
			<HeaderSearchButtom />
		</View>
	)
}

export default MainHeader