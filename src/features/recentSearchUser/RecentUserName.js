import { memo } from "react"
import { Text, View } from "react-native"

const RecentUserName = memo(({ firstName }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 11, marginTop: 5 }}>
                {firstName}
            </Text>
        </View>
    )
})

export default RecentUserName