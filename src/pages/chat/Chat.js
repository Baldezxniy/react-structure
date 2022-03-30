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

	const [redactMode, setRedactMode] = useState(false)

	const showRedactMode = () => {
		setRedactMode(true)
		zeroingMessageArr()
	}

	const [pintMessage, setPintMessage] = useState(null)
	const [userName, setUserName] = useState({})




	const [addCheckArr, setAddCheckArr] = useState([])
	const cleanAddCheckArr = () => {
		setAddCheckArr([])
	}




	return (
		<View style={{ flex: 1 }}>
			<Header addCheckArr={addCheckArr} messageArr={messageArr} showRedactMode={showRedactMode} userName={userName} headerMode={chatMode} setUserName={setUserName} messageArr={messageArr} zeroingMessageArr={zeroingMessageArr} />
			{isFloating &&
				<Music />
			}
			<ChatMessageList setRedactMode={setRedactMode} cleanAddCheckArr={cleanAddCheckArr} setAddCheckArr={setAddCheckArr} chatMode={chatMode} setPintMessage={setPintMessage} messageArr={messageArr} setMessageArr={setMessageArr} setChatMode={setChatMode} zeroingMessageArr={zeroingMessageArr} />
			<FormChatInput showRedactMode={showRedactMode}  cleanAddCheckArr={cleanAddCheckArr} addCheckArr={addCheckArr} chatMode={chatMode} messageArr={messageArr} setRedactMode={setRedactMode} redactMode={redactMode} pintMessage={pintMessage} setPintMessage={setPintMessage} />
		</View>
	)
})



export default Chat