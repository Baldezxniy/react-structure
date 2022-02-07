import { useEffect } from "react"
import { useState } from "react"
import { Text } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { useSearchList } from "../../apiHook/useSearchList"
import ResentSearchChatItem from "../resentSearchChat/ResentSearchChatItem"
import { getLoading, getSearch } from "./searchListSelector"
import { getSearchTC } from "./searchListSlice"

const SearchList = ({ input }) => {
    const dispatch = useDispatch()
    const searchList = useSearchList()
    useEffect(() => {
        dispatch(getSearchTC(searchList))
    }, [])

    const search = useSelector(getSearch)
    const loading = useSelector(getLoading)

    const [state, setState] = useState(null)
    useEffect(() => {
        const filter = search.filter(user => user.firstName.toLowerCase().includes(input.toLowerCase()))
        setState(filter)
    }, [input, search])
    return (
        <>
            {
                loading ?
                    <View style={{ paddingHorizont: 15, marginTop: 20, alignItems: 'center' }}>
                        <Text>
                            А тут запрос на сервак должен быть но к сожелению эту функцию я не смог добавить
                        </Text>
                    </View>
                    :
                    <></>
            }
        </>
    )
}

export default SearchList