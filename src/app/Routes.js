import { NativeRouter, Routes, Route } from "react-router-native";

import SettingPage from "../pages/setting/SettingPage.js";
import AddContact from "../pages/addContact/AddContact.js";
import AddMessage from "../pages/addMessage/AddMessage.js";
import Main from "../pages/main/Main.js";
import Chat from "../pages/chat/Chat.js";
import Search from "../pages/search/Search.js";
import UserProfile from "../pages/userProfile/UserProfile.js";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View } from "react-native";
import { initializationSucses } from "./appSlice.js";
import { useMyData } from "../apiHook/useMyData.js";
import { useI18n } from "../apiHook/useI18n.js";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


export const RoutesApp = (props) => {

	const profile = useMyData()
	const i18nHook = useI18n()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializationSucses({ profile, i18nHook }))
	}, [])
	const initialization = useSelector(state => state.app.initialization)
	const { i18n } = useTranslation()
	const activeLanguage = useSelector(state => state.app.i18n)

	useEffect(() => {
		i18n.changeLanguage(activeLanguage)
	}, [initialization, activeLanguage])

	return (
		<>
			{
				!initialization ?
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
						<ActivityIndicator />
					</View>
					:
					<NativeRouter>
						<Routes>
							<Route exact path='/search' element={<Search />} />
							<Route path='/chat' element={<Chat />} />
							<Route exact path="/" element={<Main />} />
							<Route path='/profile/' element={<UserProfile />} />
							<Route path='/add-message' element={<AddMessage />} />
							<Route path='/add-contact' element={<AddContact />} />
							<Route path='/setting' element={<SettingPage />} />
						</Routes>
					</NativeRouter>
			}
		</>
	)
}


