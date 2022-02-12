import { View, Text, StyleSheet, Image, Switch, ScrollView, TextInput } from 'react-native'
import { Link } from 'react-router-native'
import { Ionicons, Fontisto, AntDesign } from "react-native-vector-icons"

const AddContact = () => {
	return (

		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<View style={styles.header__arrow}>
					<Link to='/add-message'>
						<Ionicons name='arrow-back' style={{ fontSize: 22, color: '#fff' }} />
					</Link>
				</View>

				<View style={styles.header__logo}>
					<Text style={{ color: '#fff', fontSize: 19, paddingLeft: 20, fontWeight: '700' }}>
						Добавить контакт
					</Text>
				</View>
				<View style={styles.search}>
					<Ionicons name='checkmark' style={{ color: '#fff', fontSize: 25 }} />
				</View>

			</View>
			<View style={[styles.row__container, { paddingLeft: 20, height: 100 }]}>
				<View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
					<View style={{ height: 70, width: 70, backgroundColor: '#87CEEB', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 30 }}>

						</Text>
					</View>
				</View>
				<View style={{ flexGrow: 1 }}>
					<View style={{ justifyContent: 'center', marginTop: 13 }}>
						<TextInput style={{ flexGrow: 1, fontSize: 18 }} placeholder='Имя (обязательно)' />
					</View>
					<View style={{ justifyContent: 'center', marginTop: 13 }}>
						<TextInput style={{ flexGrow: 1, fontSize: 18 }} placeholder='Фамилия (необязательно)' />
					</View>
				</View>
			</View>
			<View style={{ paddingLeft: 20 }}>
				<View style={{ marginTop: 20 }}>
					<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
						скоро обещаю добавить
					</Text>
				</View>
				<View style={{ marginTop: 20 }}>
					<Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
						В дороботке
					</Text>
				</View>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	row__container: {
		flexDirection: 'row'
	},
	header: {
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		height: 60,
		width: '100%',
		borderColor: 'rgba(0, 0, 0, 0.5)',
		borderBottomWidth: 0.7,
		borderStyle: 'solid'

	},
	header__arrow: {
		justifyContent: 'center',
		marginRight: 20
	},
	header__logo: {
		justifyContent: 'center',
		flexGrow: 1
	},
	search: {
		justifyContent: 'center',
		alignItems: 'center',

	},
})


export default AddContact