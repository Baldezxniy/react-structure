import { View } from "react-native"
import { ListItemSort } from "./LIstItemSort"
import { useContactList } from '../../apiHook/useAddMessageList'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getContacts, getLoading } from "./contactListSelector"
import { getContactsTC } from './contactListSortSlice'


export const ContactListSort = ({ sortMode }) => {


    const contacts = useContactList()
    const dispatch = useDispatch()
    const loading = useSelector(getLoading)

    useEffect(() => {
        dispatch(getContactsTC(contacts))
    }, [])


    const storeContacts = useSelector(getContacts)
    const lastItem = storeContacts.length - 1
    const arrSortName = [...storeContacts].sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)


    return (
        <>
            {loading ?
                <View>
                    {
                        sortMode &&

                        [...arrSortName].map((user, index) => {
                            const isFirst = index === 0 ? true : false
                            const isSortName = () => {
                                if (!index) {
                                    return true
                                } else {
                                    return arrSortName[index - 1].firstName.toLowerCase().substring(0, 1) !== user.firstName.toLowerCase().substring(0, 1)
                                }
                            }

                            return (
                                <ListItemSort isFirst={isFirst} avatar={user.avatar} sortMode={sortMode} isSortName={isSortName} online={user.online} lastName={user.lastName} firstName={user.firstName} />
                            )
                        })
                    }
                    {
                        !sortMode &&
                        [...storeContacts].map((user, index) => {

                            const isLast = index === lastItem

                            return (
                                <ListItemSort isLast={isLast} avatar={user.avatar} sortMode={sortMode} online={user.online} lastName={user.lastName} firstName={user.firstName} />

                            )
                        })

                    }

                </View>
                :
                <></>
            }
        </>
    )
}