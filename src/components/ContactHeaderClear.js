import { TouchableHighlight } from "react-native"
import { Ionicons } from 'react-native-vector-icons'
export const ContactHeaderClear = ({ setSearchValue }) => {
    return (
        <TouchableHighlight onPress={() => setSearchValue('')} style={{ width: 35, justifyContent: "center", alignItems: "flex-end" }} >
            <Ionicons name='ios-close-outline' style={{ fontSize: 25 }} />
        </TouchableHighlight>
    )
}