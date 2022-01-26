import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import  { CopyUserName } from './EditUserName'
import Header from '../../layout/Header'
import SettingInfo from '../../components/SettingInfo'
import SettingDataList from '../../components/SettingDataLIst'
import SettingSettingList from '../../components/SettingSettingList'
import SettingFooter from '../../layout/SettingFooter'
import SettingHelpList from '../../components/SettingHelpList'
import SettingMenu from '../../layout/SettingMenu'
import ModalName from '../../features/settingModal.js/ModalName'
import ModalUserName from '../../features/settingModal.js/ModalUserName'
import ModalDiscription from '../../features/settingModal.js/ModalDiscription'



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
	const closeEditUserNameHeandler = () => {
		setOpenEditUserName(false)
	}

	const [openEditDiscription, setOpenEditDiscription] = useState(false)
	const openEditDiscriptionHeandler = () => {
		setOpenEditDiscription(true)
	}
	const closeEditDiscriptionHeandler = () => {
		setOpenEditDiscription(false)
	}


	const [openCopy, setOpenCopy] = useState(false)


	return (
		<View style={{ flex: 1 }}>
			{/* modal */}
			<ModalName  openEditName={openEditName} closeEditNameHeandler={closeEditNameHeandler} />
			<ModalUserName openEditUserName={openEditUserName} setOpenEditUserName={setOpenEditUserName} />
			<CopyUserName openCopy={openCopy} setOpenCopy={setOpenCopy} />
			<ModalDiscription setOpenEditDiscription={setOpenEditDiscription} openEditDiscription={openEditDiscription} />
			{/* modal */}

			<Header openMenuHeandler={openMenuHeandler} headerMode='setting' />
			<ScrollView >
				<SettingInfo />
				<SettingDataList  setOpenCopy={setOpenCopy} openEditUserNameHeandler={openEditUserNameHeandler} openEditDiscriptionHeandler={openEditDiscriptionHeandler} />
				<SettingSettingList />
				<SettingHelpList />
				<SettingFooter />
			</ScrollView>
			{/* menu */}
			<SettingMenu openMenu={openMenu} closeMenuHandler={closeMenuHandler} openEditNameHeandler={openEditNameHeandler}/>
			{/* /menu */}
		</View >
	)
})



export default SettingPage