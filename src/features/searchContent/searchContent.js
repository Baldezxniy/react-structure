import { memo } from "react";
import { ScrollView, View } from "react-native";
import { SearchStyles } from "../../styles/SearchStyles";
import RecentUserList from "../recentSearchUser/RecentUserList";
import ResertSearchChat from "../resentSearchChat";
import SearchList from "./searchList";

const SearchContent = memo(({ input }) => {

    return (
        <ScrollView>
            {
                !input && <>
                    <View style={SearchStyles.profille__list} >
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <>
                                <RecentUserList />
                            </>
                        </ScrollView>
                    </View>
                    <ResertSearchChat />
                </>
            }
            {
                !!input && <SearchList input={input} />
            }
        </ScrollView>
    )
})


export default SearchContent