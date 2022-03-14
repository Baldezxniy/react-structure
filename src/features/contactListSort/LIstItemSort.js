import { Image, Text, TouchableHighlight, View, _View } from "react-native"
import { useNavigate } from "react-router-native"

export const ListItemSort = ({ isLast, isFirst, sortMode, isSortName, online, firstName, lastName, avatar }) => {

    const navigator = useNavigate()

    return (
        <>
            {
                sortMode && <>
                    {isSortName() && !isFirst && < View style={{ height: 10, justifyContent: "center", marginLeft: 55, marginRight: 15 }}>
                        <View style={{ height: 0.5, backgroundColor: '#000' }}>
                        </View>
                    </View>}
                </>
            }
            <TouchableHighlight onPress={() => {
                navigator('/chat')
            }} style={{ flexDirection: 'row', height: 60, alignItems: 'center', paddingLeft: 15, }}>
                <>


                    {sortMode && <View style={{ width: 40, padding: 10, justifyContent: 'center' }}>

                        {isSortName() &&
                            <Text style={{ fontSize: 23, color: 'rgba(0,0, 0, 0.5)' }}>
                                {firstName.substring(0, 1)}
                            </Text>
                        }

                    </View>}

                    <View style={{ marginRight: 15 }}>
                        <Image style={{ width: 45, height: 45, borderRadius: 50 }} source={{ uri: avatar }} />
                    </View>
                    <View style={{ flexGrow: 1 }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '700' }}>
                                {firstName} {lastName}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, color: 'rgba(0, 0, 0, 0.5)' }}>
                                {online ? 'был(а) недавно' : "в сети"}
                            </Text>
                        </View>

                    </View>


                </>
            </TouchableHighlight>
            {
                !sortMode && <>
                    {isLast && <View style={{ height: 10, justifyContent: "center", marginLeft: 55, marginRight: 15 }}>
                        <View style={{ height: 0.5, backgroundColor: '#000' }}>
                        </View>
                    </View>}
                </>
            }
        </>
    )
}