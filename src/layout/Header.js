import { Text, View, TouchableHighlight } from 'react-native';
import ChatHeaderBackArrow from '../components/ChatHeaderBackArrow';
import ChatHeaderButton from '../components/ChatHeaderButton';
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
import DeleteChat from '../components/DeleteChat';
import { useState } from 'react';
import ChatHeaderContent from '../features/chatHeaderContent';
import DeleteMessage from '../features/chatMessage/DeleteMessage';
import { ContactaBackArrow } from '../components/ContactBackArrow';
import { ContactHeaderTitle } from '../components/ContactHeaderTitle';
import { ContentHeaderRightBtn } from '../components/ContentHeaderRightBtn';
import { CntactHeaderInput } from '../components/CntactHeaderInput';
import { ContactHeaderClear } from '../components/ContactHeaderClear';



const Header = ({
	showMenuAnimatedOn, headerMode, setHeaderMode, openMenuHeandler, closeSelect,
	selectArr, setSelectArr, input, setInput, messageArr, zeroingMessageArr,
	userName, setUserName, userDeleteChat, setSortMode, searchValue, setSearchValue }) => {


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
						<DeleteChat userDeleteChat={userDeleteChat} clearSelect={clearSelect} openDelete={openDelete} selectArr={selectArr} closeDelete={closeDelete} chatDelete={chatDelete} />
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
					<ChatHeaderContent setUserName={setUserName} />
					<ChatHeaderButton />
				</View>
			)
		} case 'chatMessageDelete': {
			return (
				<View style={stylesHeader.header}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<TouchableHighlight onPress={zeroingMessageArr} style={{ marginRight: 10 }}>
							<Ionicons name='ios-close-outline' style={{ color: '#fff', fontSize: 25 }} />
						</TouchableHighlight>
						<View>
							<Text style={{ fontSize: 18 }}>
								{messageArr.length}
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1 }}>
						<View style={{ marginRight: 30 }}>
							<MaterialIcons name='content-copy' style={{ color: '#fff', fontSize: 22 }} />
						</View>
						<View style={{ marginRight: 30 }}>
							<Ionicons name='ios-return-up-forward' style={{ fontSize: 22 }} />
						</View>
						<DeleteMessage zeroingMessageArr={zeroingMessageArr} messageArr={messageArr} userName={userName} />
					</View>
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
		} case "contact": {
			return (
				<View style={stylesHeader.header}>
					<ContactaBackArrow headerMode={headerMode} />
					<ContactHeaderTitle />
					<ContentHeaderRightBtn setHeaderMode={setHeaderMode} setSortMode={setSortMode} />
				</View>
			)
		} case 'search-contact-mode': {
			return (
				<View style={stylesHeader.header}>
					<ContactaBackArrow headerMode={headerMode} setHeaderMode={setHeaderMode} />
					<CntactHeaderInput searchValue={searchValue} setSearchValue={setSearchValue} />
					{!!searchValue && <ContactHeaderClear setSearchValue={setSearchValue} />}
				</View>
			)
		}
	}


}

export default Header