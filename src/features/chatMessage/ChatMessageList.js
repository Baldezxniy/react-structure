import { memo } from "react";
import { ScrollView, View } from "react-native";
import ChatMessage from "./ChatMessage";

const ChatMessageList = memo(() => {

    const message = [
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },

        { userId: 1, text: 'хуй', changed: false, time: '10:01' },

        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },

        { userId: 12, text: 'пизда', changed: true, time: '10:01' }]

    return (


        <View style={{ flexGrow: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                <View>
                    {
                        [...message].map((m, index) => {
                            return <ChatMessage key={index} userId={m.userId} text={m.text} changed={m.changed} time={m.time} />
                        })
                    }
                </View>
            </ScrollView>
        </View>



    )
})

export default ChatMessageList