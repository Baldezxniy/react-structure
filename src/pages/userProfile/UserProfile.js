import {View, Text, StyleSheet, Image, Switch, ScrollView} from 'react-native'
import {Link} from 'react-router-native'
import {Ionicons, Foundation,MaterialCommunityIcons, FontAwesome
} from 'react-native-vector-icons'



const image = {uri:'data:image/jpeg;base64,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'}
const image2 = {uri:'data:image/jpeg;base64,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'} 

const UserProfile = (props) =>{
	return (
			<View style={{flex:1}}>
				<View style={styles.header}>
				<View style={styles.header__arrow}>
					<Link to='/chat'>
						<Ionicons name='arrow-back' style={{fontSize:22, color:'#fff'}}/>
					</Link>
				</View>
					
				<View style={[styles.row__container, {flexGrow:1, justifyContent:'flex-end'}]}>
					<View style={{justifyContent:'center' }}>
						<Foundation name='telephone' style={{fontSize:25, marginRight:15}}/>
					</View>
					<View style={{justifyContent:'center'}}>
						<Ionicons name='ellipsis-horizontal' style={{transform:[{rotate:'90deg'}], fontSize:22}}/>
					</View>
				</View>
			</View>
			<ScrollView>
			<View style={styles.info__container}>
				<View style={{alignItems:'center', flexDirection:'row', flexGrow:1}}>
					<View>
						<Image style={{width:60, height:60, borderRadius:50}}source={image} />
					</View>
					<View style={{marginLeft:13}}>
						<Text style={{color:'#fff', fontSize:19, fontWeight:'700'}}>
							Вова
						</Text>
						<View >
						<Text style={{color:'rgba(0, 0, 0, 0.5)', fontSize:13}}>
							был(а) недавно
						</Text>
						</View>
					</View>
				</View>
				<View style={styles.info__message}>
										<MaterialCommunityIcons name='message-text-outline' style={{fontSize:24}} />
				</View>
			</View>
			<View style={{paddingLeft:20}}>
				<View >
					<View style={{paddingTop:10}}>
					<Text style={{color:'#4169E1', fontSize:16, fontWeight:'700'}}>
						Информация
					</Text>
				</View>
				<View>
					
				<View style={{borderColor:'rgba(0, 0, 0, 0.5)', borderStyle:'solid', borderBottomWidth:1, paddingBottom:13, marginTop:10}}>
					<View >
						<Text style={{fontSize:16}}>
							Я Вова из Саратова
						</Text>
					</View>
					<View>
						<Text style={{color:'rgba(0, 0, 0, 0.5)', fontSize:13, marginTop:5}}>
							О себе
						</Text>
					</View>
				</View>	
				<View style={{borderColor:'rgba(0, 0, 0, 0.5)', borderStyle:'solid', borderBottomWidth:1, paddingBottom:13, marginTop:10}}>
					<View >
						<Text style={{fontSize:16}}>
							@vova228
						</Text>
					</View>
					<View>
						<Text style={{color:'rgba(0, 0, 0, 0.5)', fontSize:13, marginTop:5}}>
							Имя пользователя 
						</Text>
					</View>
				</View>
				</View>
				<View style={{ borderColor:'rgba(0, 0, 0, 0.5)', borderStyle:'solid', borderBottomWidth:1, paddingBottom:13, marginTop:10}}>
						<View style={{flexDirection:'row', paddingRight:20}}>
							<View style={{flexGrow:1}}>
				<View>
						<Text>
							Уведомления
						</Text>
					</View>
					<View>
						<Text style={{color:'rgba(0, 0, 0, 0.5)', fontSize:13, marginTop:5}}>
							Включены
						</Text>
					</View>
					</View>
					<View style={{flexDirection:'row',alignItems:'center'}}>
					<View style={{ borderColor:'rgba(0, 0, 0, 0.5)', borderStyle:'solid', borderLeftWidth:1, height:25, marginRight:10}}>
					</View>
						<Switch value={true}     trackColor={{ false: "#767577", true: "#81b0ff" }}    thumbColor={false ? "#f5dd4b" : "#f4f3f4"}/>
					</View>
						</View>
				</View>
				</View>
			</View>
			<View style={styles.container__folders}>
				 
 <ScrollView
					horizontal={true}
					  showsHorizontalScrollIndicator={false}

				>
				<View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text, styles.folders__item__text__active]}>
						Медиа
						</Text>
					
					</View>
					<View style={styles.active}>
					</View>
				</View><View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text]}>
						Файлы
						</Text>
					
					</View>
					<View >
					</View>
				</View><View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text]}>
						Ссылки
						</Text>
					
					</View>
					<View >
					</View>
				</View><View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text]}>
						Музыка
						</Text>
					
					</View>
					<View >
					</View>
				</View><View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text]}>
						Голосовые
						</Text>
					
					</View>
					<View >
					</View>
				</View>
			<View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text]}>
						GIF
						</Text>
					
					</View>
					<View >
					</View>
				</View>
			<View style={styles.folders__item}>
					<View style={{flexDirection:'row', alignItems:'center'}}>
						<Text style={[styles.folders__item__text]}>
						Группы
						</Text>
					
					</View>
					<View >
					</View>
				</View>
			

					</ScrollView>
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
			<View style={[styles.row__container, {flexWrap: 'wrap'}]}>
				<View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View><View style={{width:'25%', borderStyle:'solid', borderWidth:2, borderColor:'rgba(0, 0, 0, 0.2)'}}>
						<Image style={{width:'100%', height:90}}source={image2} />
				</View>
			</View>
			</ScrollView>
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
	},
	info__container:{
		flexDirection:'row',
		height:90,
		paddingLeft:15,
		paddingRight:15,
		borderColor:'rgba(0,0, 0, 0.3)',
		borderStyle:'solid',
		borderBottomWidth:2,
		position:'relative'
	},
	info__message:{
		width:60, 
		height:60,
		backgroundColor:'#10DBFF',
		borderRadius:50, 
		position:'absolute',
		bottom:-30,
		right:20,
		alignItems:'center',
		justifyContent:'center'
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
	},
	container__folders:{
	flexDirection:'row',
  },
	folders__item:{
		paddingTop:10,
		marginLeft:15,
		marginRight:15
	},
	active:{

		marginTop:7,
		borderTopColor:'#4169E1',
		borderStyle:'solid',
		borderTopWidth:4,
		borderTopEndRadius:10,
		borderTopStartRadius:10
	},
	folders__item__text:{
		color:'rgba(0, 0, 0, 0.5)',
		fontSize:13.5,
		paddingRight:8,
		paddingLeft:8,
		fontWeight:'700'
	},
	folders__item__text__active:{
		color:'#4169E1',
	},

})

export default UserProfile