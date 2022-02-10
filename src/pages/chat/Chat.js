import { View } from 'react-native'
import React, { memo, useState } from 'react'
import Header from '../../layout/Header'
import Music from '../../layout/Music'
import ChatMessageList from '../../features/chatMessage/ChatMessageList'
import FormChatInput from '../../features/chatInput/FormChatInput'

const Chat = memo(({ }) => {

	const [isFloating, setIsFloating] = useState(true)
	const [chatMode, setChatMode] = useState('chat')

	const [messageArr, setMessageArr] = useState([])
	const zeroingMessageArr = () => {
		setChatMode('chat')
		setMessageArr([])
	}

	const [userName, setUserName] = useState({})
	return (
		<View style={{ flex: 1 }}>
			<Header messageArr={messageArr} userName={userName} headerMode={chatMode} setUserName={setUserName} messageArr={messageArr} zeroingMessageArr={zeroingMessageArr} />
			{isFloating &&
				<Music />
			}
			<ChatMessageList messageArr={messageArr} setMessageArr={setMessageArr} setChatMode={setChatMode} zeroingMessageArr={zeroingMessageArr} />
			<FormChatInput />
		</View>
	)
})



export default Chat