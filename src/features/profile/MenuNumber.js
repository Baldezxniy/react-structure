import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { getTelephone } from "./profileSelector"

const MenuNumber = (props) => {
    const telephone = useSelector(getTelephone)
    return (
        <View>
            <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 13.8 }}>
                {telephone}
            </Text>
        </View>
    )
}

export default MenuNumber