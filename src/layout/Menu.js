import { Animated, FlatList, View } from "react-native"
import { menuDataList } from "../components/menuDataList"
import MenuParamsItem from "../components/MenuItemParams"
import MenuAvatar from "../features/profile/MenuAvatar"
import MenuName from "../features/profile/MenuName"
import MenuNumber from "../features/profile/MenuNumber"
import ThemeApp from "../components/Theme"

import { stylesMainMenu } from "../styles/mainMenuStyles"

const Menu = ({ showMenuAnimated }) => {

	const renderItem = ({ item }) => (
		<MenuParamsItem title={item.title} iconName={item.iconName} Icon={item.Icon} path={item.path} id={item.id} />
	);
	return (
		<Animated.View style={{ ...stylesMainMenu.menu__aninated__container, left: showMenuAnimated }}>
			<View style={stylesMainMenu.header__side__menu_left}>
				<View style={stylesMainMenu.menu__header__container}>
					<View style={stylesMainMenu.menu__header}>
						<MenuAvatar />
						<ThemeApp />
					</View>
					<View style={{ justifyContent: 'flex-end' }}>
						<MenuName />
						<MenuNumber />
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