import { Text, View } from "react-native"

const ResentSearchItemChatName = ({ firstName, lastName }) => {
    return (
        <View style={{ justifyContent: 'flex-start', marginTop: 4 }}>
            <Text style={{ fontSize: 17, fontWeight: '600' }}>
                {`${firstName} ${lastName}`}
            </Text>
        </View>
    )
}

export default ResentSearchItemChatName