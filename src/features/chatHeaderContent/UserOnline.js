import { Text, View } from "react-native"

const UserOnline = ({ online }) => {
    return (
        <View>
            <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 14 }}>
                {
                    online ? 'в сети' : 'был(а) недавно'
                }
            </Text>
        </View>
    )
}

export default UserOnline