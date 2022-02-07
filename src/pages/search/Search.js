import { useState } from 'react'
import { View } from 'react-native'
import SearchFolderList from '../../components/SearchFolderList'
import SearchContent from '../../features/searchContent/searchContent'
import Header from '../../layout/Header'
import Music from '../../layout/Music'




const Search = () => {
	const [input, setInput] = useState('')
	return (
		<View style={{ flex: 1 }}>
			<Header input={input} setInput={setInput} headerMode='search' />
			<SearchFolderList />
			<Music />
			<SearchContent input={input} />
		</View>
	)
}




export default Search