import { View, ScrollView } from 'react-native'

import Header from '../../layout/Header'

import USerProfileData from '../../components/UserProfileData'
import Music from '../../layout/Music'
import UserProfileInfo from '../../components/UserProfileInfo'
import FolderList from '../../features/userProfileFolder/FolderList'
import UserProfileImgList from '../../features/userProfileImgeList/UserProfileImgeList'



const UserProfile = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<Header headerMode={'userProfile'} />
			<ScrollView>
				<USerProfileData />
				<UserProfileInfo />
				<FolderList />
				<Music />
				<UserProfileImgList />
			</ScrollView>
		</View>
	)
}


export default UserProfile