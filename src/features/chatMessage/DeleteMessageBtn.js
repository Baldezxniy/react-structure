import { Text, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { deleteMessageTC } from "./chatMessageSlice"

export const DeleteMessageBtn = ({ zeroingMessageArr, messageArr }) => {

    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        dispatch(deleteMessageTC(messageArr))
        zeroingMessageArr()
    }

    return (
        <TouchableOpacity onPress={handleDeleteMessage} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
            <Text style={{ color: '#fa143e' }}>
                УДАЛИТЬ
            </Text>
        </TouchableOpacity>
    )
}