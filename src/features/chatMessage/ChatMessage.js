import { Text, TouchableHighlight, View } from "react-native"
import MessageChange from "./MessageChange"
import MeassageText from "./MessageText"
import MessageTime from "./MessageTime"
import { Ionicons } from 'react-native-vector-icons'
import { Animated, PanResponder } from 'react-native'
import { useRef } from 'react'


const ChatMessage = ({ userId, text, changed, time, messageArr, setChatMode, setMessageArr, messageId, zeroingMessageArr, setShowMenu, setPosition, pintMessage, check }) => {
    const myId = 1
    const justifyContent = myId !== userId ? 'flex-start' : 'flex-end'

    const messageOrChange = changed ? 16 : 30
    const isMessage = text.length >= messageOrChange

    const messageCheck = messageArr.length > 0
    const backgroundColor = messageArr.includes(messageId)



    const messageSwip = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: messageSwip.x, // x,y are Animated.Value
            },
        ]),
        onPanResponderRelease: () => {
            Animated.spring(
                messageSwip, // Auto-multiplexed
                {
                    toValue: { x: 0, y: 0 },
                    duration: 100,
                    useNativeDriver: false
                } // Back to zero
            ).start(() => {
                //dispatch...
            });
        },
    });


    return (
        <Animated.View style={{ ...messageSwip.getLayout(), width: '100%' }}>

            <TouchableHighlight
                delayLongPress={100}
                onLongPress={() => {
                    if (messageArr.length === 0) {
                        setChatMode('chatMessageDelete')
                        setMessageArr(prev => [...prev, messageId])
                    } else if (messageArr.length > 0 && !messageArr.includes(messageId)) {
                        setMessageArr(prev => [...prev, messageId])
                    } else if (messageArr.length === 1 && messageArr.includes(messageId)) {
                        zeroingMessageArr()
                    } else if (messageArr.length > 0 && messageArr.includes(messageId)) {
                        setMessageArr(prev => {
                            return prev.filter(message => message !== messageId)
                        })
                    }
                }}
                onPress={(e) => {
                    if (messageArr.length === 0) {
                        setShowMenu(true)
                        setPosition(e.touchHistory.touchBank[0].currentPageX, e.touchHistory.touchBank[0].currentPageY)
                    }
                    if (messageCheck) {
                        if (messageArr.length > 0 && !messageArr.includes(messageId)) {
                            setMessageArr(prev => [...prev, messageId])
                        } else if (messageArr.length === 1 && messageArr.includes(messageId)) {
                            zeroingMessageArr()
                        } else if (messageArr.length > 0 && messageArr.includes(messageId)) {
                            setMessageArr(prev => {
                                return prev.filter(message => message !== messageId)
                            })
                        }
                    }
                }}
                underlayColor='none' style={{ flexDirection: "row", backgroundColor: backgroundColor ? '#9fa1d4' : 'rgba(0, 0, 0, 0)' }}>
                <>
                    {messageCheck && <View style={{ justifyContent: "center", alignItems: 'center', paddingLeft: 15 }}>
                        <View style={{ borderWidth: 1, borderColor: '#616166', width: 25, height: 25, borderRadius: 50, backgroundColor: backgroundColor ? '#05ff2f' : 'rgba(0, 0, 0, 0)', justifyContent: "center", alignItems: 'center', }}>
                            {
                                messageArr.includes(messageId) && <Ionicons name='ios-checkmark' style={{ fontSize: 15 }} />
                            }
                        </View>
                    </View>}
                    <View style={{ flexGrow: 1, paddingHorizontal: 15, flexDirection: 'row', justifyContent: justifyContent, }}>
                        <View {...panResponder.panHandlers} style={{ backgroundColor: '#0e274d', marginVertical: 2, borderRadius: 7, paddingHorizontal: 10, }}>
                            <>
                                {
                                    !!pintMessage.text &&
                                    <TouchableHighlight onPress={() => { '' }} style={{ flexDirection: "row", paddingTop: 7 }}>
                                        <>
                                            <View style={{ borderColor: '#62a0fc', borderLeftWidth: 2, width: 10 }}>

                                            </View>
                                            <View>
                                                <View>
                                                    <Text style={{ color: '#62a0fc', fontWeight: '600' }}>
                                                        {pintMessage.name.firstName}
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text>
                                                        {pintMessage.text}
                                                    </Text>
                                                </View>
                                            </View>
                                        </>
                                    </TouchableHighlight>
                                }
                            </>
                            <View style={{ flexDirection: isMessage ? 'column' : 'row', maxWidth: 300 }}>
                                <MeassageText text={text} isMessage={isMessage} />
                                <View style={{ flexDirection: "row", alignItems: 'flex-end', justifyContent: isMessage ? "flex-end" : "flex-start", paddingBottom: 4 }}>
                                    <MessageChange changed={changed} />
                                    <MessageTime time={time} marginRight={myId === userId ? 4 : 0} />
                                    {myId === userId && <View>
                                        {check ? <Ionicons name='ios-checkmark-done' style={{ fontSize: 17 }} /> :
                                            <Ionicons name='ios-checkmark' style={{ fontSize: 17 }} />}
                                    </View>}
                                </View>
                            </View>
                        </View>
                    </View>
                </>
            </TouchableHighlight>
        </Animated.View >

    )
}

export default ChatMessage