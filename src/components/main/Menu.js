import { Animated, FlatList, View } from "react-native"
import { ADDITIONAL_DATA_LIST } from "../../assets/main/additionalParamsDataList"
import { DATA_LIST } from "../../assets/main/paramsListData"
import { stylesMainMenu } from "../../assets/mainMenu/mainMenuStyles"
import MenuParamsItem from "./MenuItemParams"
import MenuImg from "../../features/mainMenu/MenuImg"
import MenuName from "../../features/mainMenu/MenuName"
import MenuNumber from "../../features/mainMenu/MenuNumber"
import ThemeApp from "../../features/mainMenu/Theme"

const Menu = ({showMenuAnimated})=>{

	const renderItem = ({ item }) => (
		<MenuParamsItem title={item.title} iconName={item.iconName} Icon={item.Icon} path={item.path} />
	);
    return (
        <Animated.View style={{ ...stylesMainMenu.menu__aninated__container, left: showMenuAnimated }}>
				<View style={stylesMainMenu.header__side__menu_left}>
					<View style={stylesMainMenu.menu__header__container}>
						<View style={stylesMainMenu.menu__header}>
							<MenuImg />
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
								data={DATA_LIST}
								renderItem={renderItem}
								keyExtractor={item => item.id}
							/>
						</View>
						<View>
							<FlatList
								data={ADDITIONAL_DATA_LIST}
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