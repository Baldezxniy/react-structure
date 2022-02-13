import { Easing, Text, TouchableHighlight, View } from "react-native"
import MessageChange from "./MessageChange"
import MeassageText from "./MessageText"
import MessageTime from "./MessageTime"
import { Ionicons } from 'react-native-vector-icons'
import { Animated, PanResponder } from 'react-native'
import { useRef } from 'react'


const ChatMessage = ({ userId, text, changed, time, messageArr, setChatMode,
    firstName, lastName, setMessageArr, messageId, zeroingMessageArr, pintMessage, check, setPintMessage }) => {


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

        ],
            { useNativeDriver: false },
        ),
        onPanResponderRelease: () => {
            if (messageSwip.x._value < -50) {
                setPintMessage({ messageId, text, firstName, lastName })
            } else if (messageSwip.x._value > 30) {
                setChatMode('chatMessageDelete')
                setMessageArr(prev => [...prev, messageId])
            }
            Animated.spring(
                messageSwip, // Auto-multiplexed
                {
                    toValue: { x: 0, y: 0 },
                    duration: 100,
                    easing: Easing.linear,
                    useNativeDriver: false
                } // Back to zero
            ).start();
        },
    });
    let noSwip = messageArr.length === 0 ? panResponder.panHandlers : null

    return (

        <TouchableHighlight

            delayLongPress={400}
            onLongPress={() => {
                if (messageArr.length === 0) {
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
            underlayColor='none' style={{ flexDirection: "row", backgroundColor: backgroundColor ? 'rgba(77, 82, 176, 0.5)' : 'rgba(0, 0, 0, 0)' }}>
            <>
                {messageCheck && <View style={{ justifyContent: "center", alignItems: 'center', paddingLeft: 15 }}>
                    <View style={{ borderWidth: 1, borderColor: '#616166', width: 25, height: 25, borderRadius: 50, backgroundColor: backgroundColor ? '#00ff2a' : 'rgba(0, 0, 0, 0)', justifyContent: "center", alignItems: 'center', }}>
                        {
                            messageArr.includes(messageId) && <Ionicons name='ios-checkmark' style={{ fontSize: 15 }} />
                        }
                    </View>
                </View>}
                <Animated.View {...noSwip} style={{ flexGrow: 1, transform: [{ translateX: messageSwip.x }], }}>
                    <View style={{ flexGrow: 1, paddingHorizontal: 15, flexDirection: 'row', justifyContent: justifyContent, }}>
                        <View style={{ backgroundColor: '#0e274d', marginVertical: 2, borderRadius: 7, paddingHorizontal: 10, }}>
                            <>
                                {
                                    !!pintMessage.text &&
                                    <View style={{ flexDirection: "row", paddingTop: 7 }}>
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
                                    </View>
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
                </Animated.View>
            </>
        </TouchableHighlight>

    )
}

export default ChatMessage