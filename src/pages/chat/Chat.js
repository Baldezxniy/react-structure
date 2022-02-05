import { View } from 'react-native'
import React, { memo, useState } from 'react'
import Header from '../../layout/Header'
import Music from '../../layout/Music'
import ChatMessageList from '../../features/chatMessage/ChatMessageList'
import FormChatInput from '../../features/chatInput/FormChatInput'

const Chat = memo(() => {

	const [isFloating, setIsFloating] = useState(true)

	return (
		<View style={{ flex: 1 }}>
			<Header headerMode='chat' />
			{isFloating &&
				<Music />
			}
			<ChatMessageList />
			<FormChatInput />
		</View>
	)
})



export default Chat