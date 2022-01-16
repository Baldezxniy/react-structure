import {View, Image,  StyleSheet, Text, TextInput} from 'react-native'
import {Ionicons, Foundation,FontAwesome, MaterialCommunityIcons, SimpleLineIcons} from 'react-native-vector-icons'
import {Link} from 'react-router-native'

const image = {uri:'data:image/jpeg;base64,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'}


const Chat = ()=>{


	const resize = (element)=>{
    
    element.target.style.height = '30px'
    element.target.style.height = element.target.scrollHeight + 'px'
    

   }
	return (
		<View style={{flex:1, }}>
			<View style={styles.header}>
				<View style={styles.header__arrow}>
					<Link to='/'>
						<Ionicons name='arrow-back' style={{fontSize:22, color:'#fff'}}/>
					</Link>
				</View>
				<Link to='/profile' style={{flexGrow:1}}>
					<View style={{alignItems:'center', flexDirection:'row', flexGrow:1}}>
					<View>
						<Image style={{width:45, height:45, borderRadius:50}}source={image} />
					</View>
					<View style={{marginLeft:13}}>
						<Text style={{color:'#fff', fontSize:17, fontWeight:'700'}}>
							Вова
						</Text>
						<View >
						<Text style={{color:'rgba(0, 0, 0, 0.5)', fontSize:14}}>
							был(а) недавно
						</Text>
						</View>
					</View>
				</View>
				</Link>
				<View style={styles.row__container}>
					<View style={{justifyContent:'center'}}>
						<Foundation name='telephone' style={{fontSize:25, marginRight:15}}/>
					</View>
					<View style={{justifyContent:'center'}}>
						<Ionicons name='ellipsis-horizontal' style={{transform:[{rotate:'90deg'}], fontSize:22}}/>
					</View>
				</View>
			</View>
			<View style={[styles.row__container, styles.music__container]}>
				<View style={{marginRight:20, justifyContent:'center'}}>
						<FontAwesome name='pause'  />
				</View>
				<View style={[styles.row__container, {alignItems:'center', flexGrow:1}]}>
					<Text style={{fontWeight:'bold'}}>
						Telegram @relax
					</Text>
					<Text style={{marginLeft:5, marginRight:5}}>
						-
					</Text>
					<Text style={{color:'rgba(0, 0, 0, 0.5)'}}>
						автор
					</Text>
				</View>
				<View style={{ justifyContent:'center'}}>
					<FontAwesome name='close' style={{fontSize:14}}/>
				</View>
			</View>
			<View style={{justifyContent:'flex-end', flexGrow:1}}>
				<View style={{flexDirection:'row'}}>
					<View style={{ backgroundColor:'#87CEEB', justifyContent:'flex-start',  borderRadius:13, marginLeft:15, marginRight:15, maxWidth:280,minWidth:160, marginBottom:4}}>
						<View style={{justifyContent:'flex-start', paddingLeft:15, paddingRight:20, paddingTop:8,  flexGrow:1, wordWrap:'break-word'}}>
							<Text>
								В итоге 3 часа я проебал чтобы разобрать далбоебизм какого-то ебаношо сеньора который на бухую голову сказал. А давайте поменяем библиотеку и не оставим статьи на то что изменилось. Пускай люди думаю что поменялось сами. А ещё в експо мы показываем так по уебански ошибки что хуй кто поймет. Вот это заебись 
							</Text>
						</View>	
						<View style={{justifyContent:'flex-end', flexDirection:'row'}}>
							<Text style={{fontSize:12, color:'rgba(0, 0, 0, 0.5)', marginRight:5, marginLeft:15, paddingBottom:3}}>
								изменено
							</Text>
							<Text style={{fontSize:12, color:'rgba(0, 0, 0, 0.5)', paddingBottom:3, paddingRight:10}}>
								10:10
							</Text>
						</View>
					</View>
				</View>	
				<View style={{flexDirection:'row', justifyContent:'flex-end'}}>
					<View style={{ backgroundColor:'#87CEEB', justifyContent:'flex-start',  borderRadius:13, marginLeft:15, marginRight:15, maxWidth:280,minWidth:160, marginBottom:4}}>
						<View style={{justifyContent:'flex-start', paddingLeft:15, paddingRight:20, paddingTop:8,  flexGrow:1, wordWrap:'break-word'}}>
							<Text>
								Нихуя не понял
							</Text>
						</View>	
						<View style={{justifyContent:'flex-end', flexDirection:'row'}}>
							<Text style={{fontSize:12, color:'rgba(0, 0, 0, 0.5)', marginRight:5, marginLeft:15, paddingBottom:3}}>
								изменено
							</Text>
							<Text style={{fontSize:12, color:'rgba(0, 0, 0, 0.5)', paddingBottom:3, paddingRight:10}}>
								10:10
							</Text>
						</View>
					</View>
				</View>	
			</View>
			<View style={{height:50, backgroundColor:'rgba(0, 0, 0, 0.1)',width:'100%', paddingRight:15, paddingLeft:15, flexDirection:'row'}}>
			<View style={{ justifyContent:'flex-end', paddingBottom:12, marginRight:15}}>
				<MaterialCommunityIcons name='sticker-emoji' style={{fontSize:22,  color:'rgba(0, 0, 0, 0.5)'}}/>

			</View>
				<View style={{justifyContent:'flex-end',flexGrow:1, paddingBottom:12}}>
					<TextInput
				autoFocus

				onInput={resize}
				style={{fontSize:16}}
				    multiline={true}
				    placeholder='Сообщение'

				 />
				</View>
				 <View style={styles.row__container}>
				<View style={{ justifyContent:'flex-end', paddingBottom:12, marginRight:15}}>
					<SimpleLineIcons name='paper-clip' style={{fontSize:22, color:'rgba(0, 0, 0, 0.5)'}}/>
				</View>
				<View style={{ justifyContent:'flex-end', paddingBottom:12}}>
					<SimpleLineIcons name='microphone'style={{fontSize:22, color:'rgba(0, 0, 0, 0.5)'}} />
					
				</View>
			</View>
			</View>
			
		</View>
		)
}





const styles = StyleSheet.create({
  row__container:{
	flexDirection:'row'
  },
  header: {
	marginTop:30,
	paddingLeft:15,
	paddingRight:15,
	flexDirection:'row',
	height:60,
	width:'100%',
	borderStyle:'solid',
	borderBottomWidth:1,
	borderColor:'rgba(0, 0, 0, 0.5)'
  },
  header__arrow:{
	justifyContent:'center',
	marginRight:20
  },
  music__container:{
		borderTopWidth:0.2,
		borderBottomWidth:0.2,
		borderStyle:'solid',
		borderColor:'rgba(0, 0, 0, 0.5)',
		height:35,
		backgroundColor:'rgba(0, 0, 0, .1)',
		paddingLeft:15,
		paddingRight:15
	}
})





export default Chat 