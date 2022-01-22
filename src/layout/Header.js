
import { View } from 'react-native';
import { stylesHeader } from '../assets/headerStyle';
import ChatHeaderBackArrow from '../components/ChatHeaderBackArrow';
import ChatHeaderButton from '../components/ChatHeaderButton';
import ChatHeaderContent from '../components/ChatHeaderContent';
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
		} case 'chat': {
			return (
				<View style={stylesHeader.header}>
					<ChatHeaderBackArrow />
					<ChatHeaderContent />
					<ChatHeaderButton /> 
				</View>
			)
		}
	}


}

export default Header