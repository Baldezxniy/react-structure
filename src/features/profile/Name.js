import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { getFirstName, getLastName } from "./profileSelector"

const Name = ({ styleContainer = {}, styleText }) => {
    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)
    return (
        <View style={styleContainer}>
            <Text style={styleText}>
                {`${firstName} ${lastName}`}
            </Text>
        </View>
    )
}

export default Name