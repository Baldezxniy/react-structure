import { View } from "react-native"
import { chatStyles } from "../../styles/chatStyles"
import MessageChange from "./MessageChange"
import MeassageText from "./MessageText"
import MessageTime from "./MessageTime"

const ChatMessage = ({userId, text,changed,time }) => {
    const myId = 1
    const justifyContent = myId !== userId? 'flex-start' : 'flex-end'
    return (
        <View style={{ flexDirection: 'row', justifyContent: justifyContent }}>
            <View style={chatStyles.message__container}>
                <MeassageText text={text} />
                <View style={chatStyles.message__data}>
                    <MessageChange changed={changed} />
                    <MessageTime time={time}/>
                </View>
            </View>
        </View>
    )
}

export default ChatMessage