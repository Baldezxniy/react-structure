import { Text, View } from "react-native"

const MeassageText = ({ text }) => {
    return (
        <View style={{ justifyContent: 'flex-start', paddingLeft: 15, paddingRight: 20, paddingTop: 8, flexGrow: 1, wordWrap: 'break-word' }}>
            <Text>
                {text}
            </Text>
        </View>
    )
}

export default MeassageText