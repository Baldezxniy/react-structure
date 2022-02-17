import { memo, useState } from "react"
import { FlatList, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { userStyle } from "../../styles/userStyles"
import RenderItem from "./UserProfileRenderFoldersItme"
import { Ionicons } from 'react-native-vector-icons'
import { UserProfileDeleteMessage } from "./UserProfileDeleteMessage"

const FolderList = memo(({ messageArr, folders, userName, setMessageArr }) => {

    const [active, setActive] = useState(0)
    return (
        <>
            {
                messageArr.length === 0 ?
                    <View style={userStyle.container__folders}>

                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}

                        >
                            {
                                folders.map((item, index) => {
                                    const color = index === active ? '#4169E1' : 'rgba(0, 0, 0, 0.5)'
                                    const borderBottomWidth = index === active ? 4 : 0
                                    return <RenderItem title={item.title} key={item.id}
                                        color={{ color }}
                                        content={item.content}
                                        borderBottomWidth={borderBottomWidth}
                                        onPress={() => setActive(index)}
                                    />
                                })
                            }

                        </ScrollView>
                    </View> :
                    <View style={{ flexDirection: 'row', paddingHorizontal: 15, height: 36.7, alignItems: "center" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableHighlight onPress={() => setMessageArr([])} style={{ marginRight: 20 }} >
                                <Ionicons name='ios-close-outline' style={{ fontSize: 22 }} />
                            </TouchableHighlight>
                            <View>
                                <Text style={{ fontSize: 17 }}>
                                    {messageArr.length}
                                </Text>
                            </View>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: 'flex-end', flexDirection: "row", flexGrow: 1 }}>
                            {messageArr.length === 1 ?
                                <View >
                                    <Ionicons name='eye-outline' style={{ fontSize: 20 }} />
                                </View>
                                :
                                <></>
                            }
                            <View style={{ marginHorizontal: 25 }}>
                                <Ionicons name='return-up-forward-outline' style={{ fontSize: 20 }} />
                            </View>
                            <UserProfileDeleteMessage messageArr={messageArr} userName={userName} setMessageArr={setMessageArr} />
                        </View>
                    </View>
            }
        </>
    )
})


export default FolderList