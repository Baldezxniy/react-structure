import { memo } from "react";
import { ScrollView, View } from "react-native";
import ChatMessage from "./ChatMessage";

const ChatMessageList = memo(() => {

    const message = [
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },

        { userId: 1, text: 'хуй', changed: true, time: '10:01' },

        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },

        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' },

        { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' },
        { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' }, { userId: 1, text: 'хуй', changed: false, time: '10:01' },



        { userId: 12, text: 'пизда', changed: true, time: '10:01' }]

    return (


        <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', position: 'relative' }}>
            
            <View style={{ position: "absolute", height: 'auto', top: 0, bottom: 0, left: 0, right: 0, maxHeight: '100%', zIndex: 1 }}>
                <ScrollView >
                    <View>
                        {
                            [...message].map((m, index) => {
                                return <ChatMessage key={index} userId={m.userId} text={m.text} changed={m.changed} time={m.time} />
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </View>



    )
})

export default ChatMessageList