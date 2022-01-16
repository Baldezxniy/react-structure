import { NativeRouter, Routes, Route, Redirect } from "react-router-native";

import SettingPage from "../pages/setting/SettingPage.js";
import AddContact from "../pages/addContact/AddContact.js";
import AddMessage from "../pages/addMessage/AddMessage.js";
import Main from "../pages/main/Main.js";
import Chat from "../pages/chat/Chat.js";
import Search from "../pages/search/Search.js";
import UserProfile from "../pages/userProfile/UserProfile.js";

export const RoutesApp = (props)=>{

	return (
	<NativeRouter>
		<Routes>
			<Route exact path='/search' element={<Search/>}/>
			<Route path='/chat' element={<Chat />}/>
			<Route  exact path="/" element={<Main/>}/>
			<Route path='profile' element={<UserProfile />} />
			<Route path='/add-message' element={<AddMessage />}/>
			<Route path='/add-contact' element={<AddContact />}/>
			<Route path='/setting' element={<SettingPage />}/>
		</Routes>
	</NativeRouter>
		
			
			

		)
}


