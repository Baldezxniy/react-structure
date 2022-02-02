import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { getFirstName, getLastName } from "./profileSelector"

const MenuName = (props) => {
    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)
    return (
        <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 18 }}>
                {`${firstName} ${lastName}`}
            </Text>
        </View>
    )
}

export default MenuName