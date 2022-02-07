import { Text, View } from "react-native"

const ResentSearchItemChatOnline = ({online}) => {
    return (
        <View style={{  marginVertical:5 }}>
            {
                online ?
                    <Text style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                        в сети
                    </Text>
                    :
                    <Text style={{ color: 'rgba(0, 0, 0, 0.3)' }}>
                        был(а) недавно
                    </Text>
            }
        </View>
    )
}

export default ResentSearchItemChatOnline