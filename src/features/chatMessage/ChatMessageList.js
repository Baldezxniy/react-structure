import { useEffect, useState } from "react";
import { useRef } from "react";
import { memo } from "react";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useMessage } from "../../apiHook/useMessage";
import ChatMessage from "./ChatMessage";
import { getLoading, getMessage } from "./chatMessageSelector";
import { getMessageTC } from "./chatMessageSlice";
import { useTranslation } from 'react-i18next';

const ChatMessageList = memo(({ messageArr, setMessageArr, setChatMode, zeroingMessageArr, setPintMessage }) => {
    const dispatch = useDispatch()
    const messages = useMessage()
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getMessageTC(messages))
    }, [])
    const messageState = useSelector(getMessage)
    const loading = useSelector(getLoading)

    return (


        <>

            <ImageBackground source={{ uri: 'https://krot.info/uploads/posts/2021-01/1610222127_38-p-fon-dlya-chata-v-telegram-63.jpg' }} style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', position: 'relative' }}>
                <>
                    {
                        loading ?
                            <View style={{
                                justifyContent: messageState.length !== 0 ? 'flex-end' : 'center',
                                position: "absolute", height: 'auto', top: 0, bottom: 0, left: 0, right: 0, maxHeight: '100%', zIndex: 999
                            }}>
                                <View >
                                    {messageState.length !== 0 && <ScrollView contentContainerStyle={{ justifyContent: 'flex-end', paddingBottom: 5 }} >

                                        {
                                            [...messageState].map((message) => {

                                                return <ChatMessage t={t} check={message.check} setPintMessage={setPintMessage}
                                                    messageId={message.messageId} pintMessage={message.pintMessage}
                                                    zeroingMessageArr={zeroingMessageArr} setChatMode={setChatMode}
                                                    messageArr={messageArr} setMessageArr={setMessageArr} key={message.messageId}
                                                    userId={message.userId} text={message.text} changed={message.changed} time={message.time}
                                                    firstName={message.firstName} lastName={message.lastName}
                                                />
                                            })
                                        }
                                    </ScrollView>}
                                    {
                                        messageState.length === 0 &&
                                        <View style={{ alignItems: "center" }}>
                                            <Text style={{ fontSize: 20, backgroundColor: 'rgba(96, 101, 204, 0.6)', borderRadius:20, paddingHorizontal:15,paddingVertical:5 }}>
                                                {t("chat.startChat")}
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
        </>



    )
})

export default ChatMessageList