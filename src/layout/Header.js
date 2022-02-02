import { View } from 'react-native';
import ChatHeaderBackArrow from '../components/ChatHeaderBackArrow';
import ChatHeaderButton from '../components/ChatHeaderButton';
import ChatHeaderContent from '../components/ChatHeaderContent';
import HeaderLogo from '../components/HeaderLogo';
import HeadeMenuButtom from '../components/HeaderMenuButtom';
import HeaderSearchButtom from '../components/HeaderSearchButtom';
import SearchHeaderBackArrow from '../components/SearchHeaderBackArrow';
import SearchHeaderClose from '../components/SearchHeaderClose';
import SettingHeaderBackArrow from '../components/SettingHeaderBackArrow';
import SettingHeaderButton from '../components/SettingHeaderButton';
import UserProfileHeaderButtom from '../components/UserProfileHeaderButtom';
import SearchInput from '../features/search/SearchInput';
import { stylesHeader } from '../styles/headerStyle';
import UserProfileHeaderBackArrow from './../components/UserProfileHeaderBackArrow'

const Header = ({ showMenuAnimatedOn, headerMode, openMenuHeandler }) => {

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
		} case 'userProfile': {
			return (
				<View style={stylesHeader.header}>
					<UserProfileHeaderBackArrow />
					<UserProfileHeaderButtom />

				</View>
			)
		} case "setting": {
			return (
				<View style={stylesHeader.header}>
					<SettingHeaderBackArrow />
					<SettingHeaderButton openMenuHeandler={openMenuHeandler}/>
				</View>
			)
		}
	}


}

export default Header