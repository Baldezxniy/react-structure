import { useEffect, useState } from "react";
import { useRef } from "react";
import { memo } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useMessage } from "../../apiHook/useMessage";
import ChatMessage from "./ChatMessage";
import { getLoading, getMessage } from "./chatMessageSelector";
import { getMessageTC } from "./chatMessageSlice";

const ChatMessageList = memo(({ messageArr, setMessageArr, setChatMode, zeroingMessageArr, setPintMessage }) => {
    const dispatch = useDispatch()
    const messages = useMessage()

    useEffect(() => {
        dispatch(getMessageTC(messages))
    }, [])
    const messageState = useSelector(getMessage)
    const loading = useSelector(getLoading)
    const [isAutoScroll, setIsAutoScroll] = useState(false)
    const ref = useRef()

    // const onScrollHandle = (e) => {
    //     debugger
    //     const element = e.currentTarget;
    //     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
    //         !isAutoScroll && setIsAutoScroll(true)
    //     } else {
    //         setIsAutoScroll(false)
    //     }
    // }

    // // useEffect(()=>{
    // //     ref.current.scrollIntoView()
    // // },[])
    return (


        <>

            <ImageBackground source={{ uri: 'https://krot.info/uploads/posts/2021-01/1610222127_38-p-fon-dlya-chata-v-telegram-63.jpg' }} style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', position: 'relative' }}>
                <>
                    {
                        loading ?
                            <View style={{
                                justifyContent: messageState.length !== 0 ? 'flex-end' : 'center',
                                position: "absolute", height: 'auto', top: 0, bottom: 0, left: 0, right: 0, maxHeight: '100%', zIndex: 1
                            }}>
                                <View >
                                    {messageState.length !== 0 && <ScrollView contentContainerStyle={{ justifyContent: 'flex-end', paddingBottom: 5 }} >
                                        <View  >

                                            {
                                                [...messageState].map((message) => {

                                                    return <ChatMessage check={message.check} setPintMessage={setPintMessage}
                                                        messageId={message.messageId} pintMessage={message.pintMessage}
                                                        zeroingMessageArr={zeroingMessageArr} setChatMode={setChatMode}
                                                        messageArr={messageArr} setMessageArr={setMessageArr} key={message.messageId}
                                                        userId={message.userId} text={message.text} changed={message.changed} time={message.time}
                                                        firstName={message.firstName} lastName={message.lastName}
                                                    />
                                                })
                                            }
                                            <View ref={ref}>

                                            </View>
                                        </View >
                                    </ScrollView>}
                                    {
                                        messageState.length === 0 &&
                                        <View style={{ alignItems: "center" }}>
                                            <Text>
                                                Напиши привет этому далбаебу
                                            </Text>
                                        </View>
                                    }
                                </View>
                            </View>
                            :
                            <></>
                    }
                </>

            </ImageBackground >
            {/* <>
                {
                    showMenu &&
                    <View style={{ position: 'absolute', top: positionY - 50, left: positionX ? 60 : 0, zIndex: 100, height: 200, width: 170, backgroundColor: 'red', borderRadius: 15, }}>
                        <Text>
                            хуй
                        </Text>
                    </View>
                }
            </> */}
        </>



    )
})

export default ChatMessageList