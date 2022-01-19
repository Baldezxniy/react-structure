import { View, Animated } from 'react-native'
import { useState, useRef } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Menu from '../../layout/Menu'
import MenuTouchable from '../../components/MenuTouchable'
import { MainBody } from '../../components/MainBody'

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


	return (
		<View style={{ flex: 1, zIndex: 0 }}>
			<Menu showMenuAnimated={showMenuAnimated} />
			<MenuTouchable openMenu={openMenu} showMenuAnimatedOut={showMenuAnimatedOut} />
			<Header headerMode='main' showMenuAnimatedOn={showMenuAnimatedOn} />
			<MainBody />
			<Footer />
		</View >
	)
}


export default Main