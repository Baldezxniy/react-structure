import { Animated, FlatList, View } from "react-native"
import { menuDataList } from "../components/menuDataList"
import MenuParamsItem from "../components/MenuItemParams"
import Name from "../features/profile/Name"
import ThemeApp from "../components/Theme"
import { stylesMainMenu } from "../styles/mainMenuStyles"
import Avatar from "../features/profile/Avatar"
import Telephone from "../features/profile/Tlephone"

const Menu = ({ showMenuAnimated }) => {

	const renderItem = ({ item }) => (
		<MenuParamsItem title={item.title} iconName={item.iconName} Icon={item.Icon} path={item.path} id={item.id} />
	);
	return (
		<Animated.View style={{ ...stylesMainMenu.menu__aninated__container, left: showMenuAnimated }}>
			<View style={stylesMainMenu.header__side__menu_left}>
				<View style={stylesMainMenu.menu__header__container}>
					<View style={stylesMainMenu.menu__header}>
						<Avatar styleAvatar={stylesMainMenu.menu__header__img} />
						<ThemeApp />
					</View>
					<View style={{ justifyContent: 'flex-end' }}>
						<Name styleContainer={{ marginTop: 10 }} styleText={{ fontSize: 18 }} />
						<Telephone />
					</View>
				</View>
				<View style={stylesMainMenu.menu__main__container}>
					<View style={stylesMainMenu.menu__main__params__list}>
						<FlatList
							data={menuDataList}
							renderItem={renderItem}
							keyExtractor={item => item.id}
						/>
					</View>
				</View>
			</View>
		</Animated.View>
	)
}

export default Menu