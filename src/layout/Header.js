import { Text, View, TouchableHighlight } from 'react-native';
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
import SearchInput from '../components/SearchInput';
import { stylesHeader } from '../styles/headerStyle';
import UserProfileHeaderBackArrow from './../components/UserProfileHeaderBackArrow'
import { Ionicons, MaterialIcons } from 'react-native-vector-icons'
import DeleteChat from '../features/chatsList/DeleteChat';
import { useState } from 'react';



const Header = ({ showMenuAnimatedOn, headerMode, openMenuHeandler, closeSelect, selectArr, setSelectArr, input, setInput }) => {
	const [chatDelete, setChatDelete] = useState(false)
	const openDelete = () => { setChatDelete(true) }
	const closeDelete = () => { setChatDelete(false) }
	const clearSelect = () => { setSelectArr([]) }

	switch (headerMode) {
		case 'main': {
			return (
				<View style={stylesHeader.header}>
					<HeadeMenuButtom showMenuAnimatedOn={showMenuAnimatedOn} />
					<HeaderLogo />
					<HeaderSearchButtom />
				</View>
			)
		} case 'delete': {
			return (
				<View style={stylesHeader.header}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableHighlight onPress={closeSelect} style={{ marginRight: 10 }}>
							<Ionicons name='ios-close-outline' style={{ color: '#fff', fontSize: 25 }} />
						</TouchableHighlight>
						<View>
							<Text style={{ fontSize: 18 }}>
								{selectArr.length}
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1 }}>
						<View style={{ marginRight: 20 }}>
							<Ionicons name='ios-notifications-off-outline' style={{ color: '#fff', fontSize: 22 }} />
						</View>
						<View style={{ marginRight: 20 }}>
							<MaterialIcons name='archive' style={{ color: '#fff', fontSize: 22 }} />
						</View>
						<DeleteChat clearSelect={clearSelect} openDelete={openDelete} selectArr={selectArr} closeDelete={closeDelete} chatDelete={chatDelete} />
						<View >
							<Ionicons name='ellipsis-horizontal' style={{ transform: [{ rotate: '90deg' }], fontSize: 22 }} />
						</View>
					</View>
				</View>
			)
		} case 'search': {
			return (
				<View style={stylesHeader.header}>
					<SearchHeaderBackArrow />
					<SearchInput input={input} setInput={setInput} />
					<SearchHeaderClose input={input} setInput={setInput} />
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
					<SettingHeaderButton openMenuHeandler={openMenuHeandler} />
				</View>
			)
		}
	}


}

export default Header