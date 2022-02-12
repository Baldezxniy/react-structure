import { Text, TouchableOpacity, View } from "react-native"
import { userStyle } from "../../styles/userStyles"

const RenderItem = ({ title, color, borderBottomWidth, onPress, content }) => {
    return (
        <>
            {content &&
                <TouchableOpacity onPress={onPress} style={[userStyle.folders__item,]}>
                    <>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[userStyle.folders__item__text, color]}>
                                {title}
                            </Text>
                        </View>
                        <View style={[{ borderBottomWidth: borderBottomWidth }, userStyle.active__folders__item]}>

                        </View>
                    </>
                </TouchableOpacity>}
        </>
    )
}

export default RenderItem