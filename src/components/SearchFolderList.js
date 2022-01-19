import { useState } from "react"
import { FlatList, Text, TouchableOpacity, View } from "react-native"
import { ScrollView } from "react-native"
import { FOLDER_LIST_DATA } from "../assets/search/folderListData"
import { SearchStyles } from "../assets/search/SearchStyles"






const RenderItem = ({ title, color, borderBottomWidth, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[SearchStyles.folders__item, { color: color, borderBottomWidth: borderBottomWidth }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={[SearchStyles.folders__item__text, color]}>
                {title}
            </Text>
        </View>
    </TouchableOpacity>
)
const SearchFolderList = () => {

    const [active, setActive] = useState(1)

    const renderItem = ({ item }) => {
        const color = item.id === active ? '#4169E1' : 'rgba(0, 0, 0, 0.5)'
        const borderBottomWidth = item.id === active ? 3 : 0

        return (
            <RenderItem title={item.title}
                color={{ color }}

                borderBottomWidth={borderBottomWidth}
                onPress={() => setActive(item.id)}
            />
        )
    }
    return (
        <View style={SearchStyles.container__folders}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            >

                <FlatList
                    horizontal={true}
                    data={FOLDER_LIST_DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={active}

                />

            </ScrollView>

        </View>
    )
}


export default SearchFolderList