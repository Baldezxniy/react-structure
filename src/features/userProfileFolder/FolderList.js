import { memo, useState } from "react"
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { userStyle } from "../../assets/userProfile/userStyles"
import RenderItem from "./UserProfileRenderFoldersItme"








const FolderList = memo((props => {

    const contentMedia = ['qwef','qwef','qwef','qwef','qwef','qwef','qwef','qwef','qwef' ]
    const DATA = [
        {
            id: 1,
            title: 'Медиа',
            content: contentMedia
        },
        {
            id: 2,
            title: 'Файлы',
            content: null
        },
        {
            id: 3,
            title: 'Ссылки',
            content:   null
        },
        {
            id: 4,
            title: 'Музыка',
            content: null
        },
        {
            id: 5,
            title: 'Голосовые',
            content: null
        },
        {
            id: 6,
            title: 'GIF',
            content: null
        },
        {
            id: 7,
            title: 'Группы',
            content: null
        },

    ]
    const [active, setActive] = useState(1)
    const renderItem = ({ item }) => {
        const color = item.id === active ? '#4169E1' : 'rgba(0, 0, 0, 0.5)'
        const borderBottomWidth = item.id === active ? 4 : 0
        return (
            <RenderItem title={item.title}
                color={{ color }}
                content={item.content}
                borderBottomWidth={borderBottomWidth}
                onPress={() => setActive(item.id)}
            />
        )
    }
    return (
        <View style={userStyle.container__folders}>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            >
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={active}

                />

            </ScrollView>
        </View>
    )
}))


export default FolderList