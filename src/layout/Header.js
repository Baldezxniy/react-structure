
import { View } from 'react-native';
import { stylesHeader } from '../assets/headerStyle';
import HeaderLogo from '../components/main/HeaderLogo';
import HeadeMenuButtom from '../components/main/HeaderMenuButtom';
import HeaderSearchButtom from '../components/main/HeaderSearchButtom';


const Header = ({ showMenuAnimatedOn, headerMode }) => {


	return (
		<View style={stylesHeader.header}>
			{headerMode === 'main' ?
				<>
					<HeadeMenuButtom showMenuAnimatedOn={showMenuAnimatedOn} />
					<HeaderLogo />
					<HeaderSearchButtom />
				</>
				: null}
			{	
				//headerMode === 'search' ?

			}
		</View>
	)
}

export default Header