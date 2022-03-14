import { TextInput, View } from "react-native"

export const CntactHeaderInput = ({ searchValue, setSearchValue }) => {
    return (
        <View style={{ flexGrow: 1, flexBasis: 'auto', flexShrink: 1 }}>
            <TextInput placeholder="Поиск" autoFocus value={searchValue} onChangeText={(e) => setSearchValue(e)} style={{ flexGrow: 1, fontSize: 23, }} />
        </View>
    )
}