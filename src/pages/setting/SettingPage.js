import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../layout/Header'
import SettingInfo from '../../components/SettingInfo'
import SettingSettingList from '../../components/SettingSettingList'
import SettingFooter from '../../layout/SettingFooter'
import SettingMenu from '../../layout/SettingMenu'
import ModalUserName from '../../features/profile/ModalUserName'
import ModalDiscription from '../../features/profile/ModalDiscription'
import ModalName from '../../features/profile/ModalName'
import SettingDataList from '../../features/profile/SettingDataLIst'




const SettingPage = React.memo((props) => {


	const [openMenu, setOpenMenu] = useState(false)
	const openMenuHeandler = () => {
		setOpenMenu(true)
	}
	const closeMenuHandler = () => {
		setOpenMenu(false)
	}

	const [openEditName, setOpenEditName] = useState(false);
	const openEditNameHeandler = () => {
		setOpenEditName(true)
	}
	const closeEditNameHeandler = () => {
		setOpenEditName(false)
	}

	const [openEditUserName, setOpenEditUserName] = useState(false)
	const openEditUserNameHeandler = () => {
		setOpenEditUserName(true)
	}
	const closeEditUserNameHandler = () => {
		setOpenEditUserName(false)
	}

	const [openEditDiscription, setOpenEditDiscription] = useState(false)
	const openEditDiscriptionHeandler = () => {
		setOpenEditDiscription(true)
	}
	const closeEditDiscriptionHandler = () => {
		setOpenEditDiscription(false)
	}




	return (
		<View style={{ flex: 1 }}>
			{/* modal */}
			<ModalName openEditName={openEditName} closeEditNameHeandler={closeEditNameHeandler} />
			<ModalUserName openEditUserName={openEditUserName} closeEditUserNameHandler={closeEditUserNameHandler} />
			<ModalDiscription closeEditDiscriptionHandler={closeEditDiscriptionHandler} openEditDiscription={openEditDiscription} />
			{/* modal */}

			<Header openMenuHeandler={openMenuHeandler} headerMode='setting' />
			<ScrollView >
				<SettingInfo />
				<SettingDataList openEditUserNameHeandler={openEditUserNameHeandler} openEditDiscriptionHeandler={openEditDiscriptionHeandler} />
				<SettingSettingList />
				<SettingFooter />
			</ScrollView>
			{/* menu */}
			<SettingMenu openMenu={openMenu} closeMenuHandler={closeMenuHandler} openEditNameHeandler={openEditNameHeandler} />
			{/* /menu */}
		</View >
	)
})



export default SettingPage