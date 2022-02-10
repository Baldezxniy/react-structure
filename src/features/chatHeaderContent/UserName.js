import { Text, View } from "react-native"

const UserName = ({ firstName, lastName }) => {
    return (
        <View>
            <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>
                {`${firstName}${!!lastName ? ` ${lastName}` : ''}`}
            </Text>
        </View>
    )
}
export default UserName