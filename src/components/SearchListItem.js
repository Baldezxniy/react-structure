import { View } from "react-native"
import { Link } from "react-router-native"
import { SearchStyles } from "../assets/search/SearchStyles"
import SearchListImg from "../features/searchList/SearchListImg"
import SearchListOnline from "../features/searchList/SearchListOnline"
import SearchListUserName from "../features/searchList/SearchListUrerName"

const SearchListItem = () => {
    return (
        <Link to='/chat' style={SearchStyles.list__item__chat}>
            <>
                <SearchListImg />
                <View style={{ marginLeft: 13, flexGrow: 1 }}>
                    <SearchListUserName />
                    <SearchListOnline />
                    <View style={{ borderStyle: 'solid', borderWidth: 0.7, borderColor: 'rgba(0, 0, 0, 0.2)' }}>

                    </View>
                </View>
            </>
        </Link>
    )
}

export default SearchListItem