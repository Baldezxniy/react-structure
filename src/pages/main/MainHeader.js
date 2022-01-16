
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Feather } from 'react-native-vector-icons'
import { Link } from 'react-router-native'


export const MainHeader = ({ showMenuAnimatedOn }) => {


	return (
		<View style={styles.header}>

			<View style={styles.header__menu} >
				<TouchableHighlight onPress={() => { showMenuAnimatedOn() }} >

					<Feather name='menu' style={{ fontSize: 25, color: '#fff' }} />
				</TouchableHighlight>

			</View>
			<View style={styles.header__logo}>
				<Text style={{ color: '#fff', fontSize: 21, paddingLeft: 20, fontWeight: '600' }}>
					Telegram
				</Text>
			</View>
			<View style={styles.search}>
				<Link to='/search'>
					<Feather name='search' style={{ color: '#fff', fontSize: 20 }} />
				</Link>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	header: {
		marginTop: 30,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		height: 45,
		width: '100%'

	},
	header__menu: {
		justifyContent: 'center',
	},

	header__logo: {
		justifyContent: 'center',
		flexGrow: 1
	},
	search: {
		justifyContent: 'center',
		alignItems: 'center',

	},

});
