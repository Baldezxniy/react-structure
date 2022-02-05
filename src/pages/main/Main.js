import { View, Animated, ScrollView } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Menu from '../../layout/Menu'
import MenuTouchable from '../../components/MenuTouchable'
import ChatList from '../../features/chatsList/ChatList'
import Music from '../../layout/Music'
import ListFolder from '../../features/chatsListFolder/ListFolder'

const Main = () => {

	const [openMenu, setOpenMenu] = useState(false)

	const showMenuAnimated = useRef(new Animated.Value(-310)).current;

	const showMenuAnimatedHandler = (left, finish) => {
		Animated.timing(showMenuAnimated, {
			toValue: left,
			duration: 5000,
			useNativeDriver: false
		}).start(({ finished }) => {
			setOpenMenu(finish)
		});
	}

	const showMenuAnimatedOn = () => {
		setOpenMenu(true)
		showMenuAnimatedHandler(0, true)
	}
	const showMenuAnimatedOut = () => {
		showMenuAnimatedHandler(-310, false)
	}
	const [selectArr, setSelectArr] = useState([])

	const [select, setSelect] = useState(false)
	const openSelect = () => { setSelect(true) }
	const closeSelect = () => {
		setSelect(false)
		setSelectArr([])
	}

	useEffect(() => {
		if (selectArr.length === 0) {
			setSelect(false)
		}
	}, [selectArr])
	return (

		<View style={{ flex: 1 }}>

			<ScrollView stickyHeaderIndices={[3]} >



				<Header setSelectArr={setSelectArr} selectArr={selectArr} closeSelect={closeSelect} headerMode={select ? 'delete' : 'main'}
					showMenuAnimatedOn={showMenuAnimatedOn} />
				<StickyHeader />
				<ChatList openSelect={openSelect} select={select} setSelectArr={setSelectArr} selectArr={selectArr} />

				{/* <Footer /> */}
			</ScrollView>
			<MenuTouchable openMenu={openMenu} showMenuAnimatedOut={showMenuAnimatedOut} />
			<Menu showMenuAnimated={showMenuAnimated} />

		</View >
	)
}

const StickyHeader = () => {
	return (
		<View style={{ backgroundColor: '#2e2e30' }}>
			<ListFolder />
			<Music />
		</View>
	)
}

export default Main
