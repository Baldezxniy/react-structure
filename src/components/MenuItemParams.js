import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { stylesMainMenu } from "../styles/mainMenuStyles";

const MenuParamsItem = ({ Icon, iconName, title, path, id }) => {

	const borderBottomWidth = id === 6 ? 1 : 0
	return (
		<Link to={path}>
			<View style={[stylesMainMenu.list__item__container, { borderBottomWidth: borderBottomWidth }]}>
				<View style={stylesMainMenu.list__item}>
					<View style={{ width: 50 }}>
						<Icon name={iconName} style={{ fontSize: 18 }} />
					</View>
					<View>
						<Text style={{ fontSize: 14, fontWeight: '700' }}>
							{title}
						</Text>
					</View>
				</View>
			</View>
		</Link>
	)
};

export default MenuParamsItem