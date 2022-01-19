
import { View } from 'react-native';
import { stylesHeader } from '../assets/headerStyle';
import HeaderLogo from '../components/HeaderLogo';
import HeadeMenuButtom from '../components/HeaderMenuButtom';
import HeaderSearchButtom from '../components/HeaderSearchButtom';
import SearchHeaderBackArrow from '../components/SearchHeaderBackArrow';
import SearchHeaderClose from '../components/SearchHeaderClose';
import SearchInput from '../features/search/SearchInput';


const Header = ({ showMenuAnimatedOn, headerMode }) => {

	switch (headerMode) {
		case 'main': {
			return (
				<View style={stylesHeader.header}>
					<HeadeMenuButtom showMenuAnimatedOn={showMenuAnimatedOn} />
					<HeaderLogo />
					<HeaderSearchButtom />
				</View>
			)
		} case 'search': {
			return (
				<View style={stylesHeader.header}>
					<SearchHeaderBackArrow />
					<SearchInput />
					<SearchHeaderClose />
				</View>
			)
		}
	}


}

export default Header