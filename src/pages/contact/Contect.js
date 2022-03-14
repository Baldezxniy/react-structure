import { View, Text, ScrollView, TextInput } from 'react-native'
import { Link } from 'react-router-native'
import { FontAwesome5 } from 'react-native-vector-icons'
import { useState } from 'react'
import Header from '../../layout/Header'
import { ContactListModal } from '../../components/ContactListModal'
import { ContactListSort } from '../../features/contactListSort'

const Contect = () => {

	const [headerMode, setHeaderMode] = useState('contact')
	const [sortMode, setSortMode] = useState(false)
	const [searchValue, setSearchValue] = useState('')

	return (
		<View style={{ flex: 1, position: 'relative' }}>
			<Header headerMode={headerMode} setHeaderMode={setHeaderMode} setSortMode={setSortMode} setSearchValue={setSearchValue} searchValue={searchValue} />
			<ScrollView>
				{!searchValue &&
					<>
						<ContactListModal />
						<View style={{ paddingLeft: 15, paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
							<Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 14, fontWeight: '700' }}>
								{sortMode ? 'Сортировка по имени' : 'Сортировка по времени входа'}
							</Text>
						</View>
						<ContactListSort searchValue={searchValue} sortMode={sortMode} />
					</>}

				{
					!!searchValue &&
					<View>
						<View style={{ paddingLeft: 15, paddingTop: 5, paddingBottom: 5, backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
							<Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 14, fontWeight: '700' }}>
								Глобальный поиск
							</Text>
						</View>
						<View style={{ alignItems: 'center', marginTop: 50 }}>
							<Text>
								Запрос на сервак
							</Text>
						</View>
					</View>
				}
			</ScrollView>


			<View style={{ justifyContent: 'center', alignItems: 'center', width: 55, height: 55, backgroundColor: '#4169E1', borderRadius: 50, position: 'absolute', bottom: 10, right: 10 }}>
				<Link to='/add-contact'>
					<FontAwesome5 name='user-plus' style={{ color: '#fff', fontSize: 18 }} />
				</Link>
			</View>
		</View>
	)
}



export default Contect