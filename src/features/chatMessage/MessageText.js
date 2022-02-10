import { Text, View } from "react-native"

const MeassageText = ({ text, isMessage }) => {
    return (
        <Text style={{ justifyContent: 'flex-start', flexGrow: 1, paddingTop: 8, paddingRight: 10, paddingBottom: isMessage ? 0 : 8 }}>
            {text}
        </Text>
    )
}

export default MeassageText