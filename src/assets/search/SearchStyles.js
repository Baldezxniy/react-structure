import { StyleSheet } from "react-native";

export const SearchStyles = StyleSheet.create({
	container__folders: {
		flexDirection: 'row',
	},
	folders__item: {
		paddingTop: 10,
		marginLeft: 15,
		marginRight: 15,
		borderRadius: 5,
	},
	active__folders__item: {
		borderBottomColor: '#4169E1',
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
		marginTop:3
	},

	folders__item__text: {
		color: 'rgba(0, 0, 0, 0.5)',
		fontSize: 13.5,
		paddingRight: 8,
		paddingLeft: 8,
		fontWeight: '700'
	},
	profille__list__item: {
		paddingRight: 12,
		paddingLeft: 12,
		paddingTop: 5,
		paddingBottom: 5
	},
	clear__container: {
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 15,
		backgroundColor: 'rgba(0,0, 0, 0.1)',
		height: 25
	},
	profille__list: {
		flexDirection: 'row',
		backgroundColor: 'rgba(0, 0, 0, 0.2)'

	},

	list__item__chat: {
		flexDirection: 'row',
		paddingLeft: 15,
		height: 60,

	}
})