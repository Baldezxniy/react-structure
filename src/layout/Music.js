import { StyleSheet, Text, View } from "react-native"
import { FontAwesome } from 'react-native-vector-icons'

const Music = () => {
    return (
        <View style={styles.music__container}>
            <View style={{ marginRight: 20, justifyContent: 'center' }}>
                <FontAwesome name='pause' />
            </View>
            <View style={{ alignItems: 'center', flexGrow: 1, flexDirection:'row' }}>
                <Text style={{ fontWeight: 'bold' }}>
                    Telegram @relax
                </Text>
                <Text style={{ marginLeft: 5, marginRight: 5 }}>
                    -
                </Text>
                <Text style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
                    автор
                </Text>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <FontAwesome name='close' style={{ fontSize: 14 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    music__container: {
        flexDirection: 'row',
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        height: 35,
        backgroundColor: 'rgba(0, 0, 0, .1)',
        paddingLeft: 15,
        paddingRight: 15
    },
})

export default Music