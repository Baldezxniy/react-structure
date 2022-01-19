import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons'
import { ScrollView } from 'react-native';
import UserListItem from '../features/chatsList/UserListItem';
import Music from '../layout/Music';


export const MainBody = () => {
	return (
		<View style={{ flexGrow: 1 }}>

			<View style={styles.row__container}>
				<ScrollView horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<View style={styles.folders__item}>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Text style={styles.folders__item__text}>
								Все
							</Text>
							<View style={styles.folders__item__bedge}>
								<Text style={{ paddingLeft: 5, paddingRight: 5, paddingTop: 1, paddingBottom: 1, fontSize: 10, }}>
									99+
								</Text>
							</View>
						</View>
						<View style={styles.active}>
						</View>
					</View>
				</ScrollView>
			</View>
			<Music />
			<View>
				<UserListItem />

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	row__container: {
		flexDirection: 'row',


	},
	folders__item: {
		marginTop: 10,
		marginLeft: 20,
		marginRight: 20,

	},
	active: {

		marginTop: 7,
		borderTopColor: '#4169E1',
		borderStyle: 'solid',
		borderTopWidth: 5,
		borderTopEndRadius: 10,
		borderTopStartRadius: 10
	},
	folders__item__text: {
		color: '#4169E1',
		fontSize: 14,
		paddingRight: 5,
		paddingLeft: 8,
	},
	folders__item__bedge: {
		justifyContent: 'center',
		borderRadius: 50,
		backgroundColor: '#4169E1',

	},
	music__container: {
		borderTopWidth: 0.2,
		borderBottomWidth: 0.2,
		borderStyle: 'solid',
		borderColor: 'rgba(0, 0, 0, 0.5)',
		height: 35,
		backgroundColor: 'rgba(0, 0, 0, .1)',
		paddingLeft: 15,
		paddingRight: 15
	}
})