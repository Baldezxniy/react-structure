import { View, ScrollView } from 'react-native'
import Header from '../../layout/Header'
import UserProfileInfo from '../../components/UserProfileInfo'
import USerProfileData from '../../features/userProfileData'
import UserProfileContent from '../../features/userProfileContent'
import { useState } from 'react'



const UserProfile = (props) => {

	const [userName, setUserName] = useState() 
	return (
		<View style={{ flex: 1 }}>
			<Header headerMode={'userProfile'} />
			<ScrollView>
				<USerProfileData setUserName={setUserName} />
				<UserProfileInfo />
				<UserProfileContent userName={userName} />
			</ScrollView>
		</View>
	)
}


export default UserProfile