import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { stylesMainMenu } from "../../assets/mainMenu/mainMenuStyles";

const MenuParamsItem = ({ Icon, iconName, title, path }) => (

	<Link to={path}>
		<View style={stylesMainMenu.list__item__container}>
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
);

export default MenuParamsItem