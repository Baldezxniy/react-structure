import { Text, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { deleteContentTC } from "./userProfileContentSlice"

export const DeletePhotoBtn = ({ photoArr, setPhotoArr }) => {

    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        dispatch(deleteContentTC(photoArr))
        setPhotoArr([])
    }

    return (
        <TouchableOpacity onPress={handleDeleteMessage} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
            <Text style={{ color: '#fa143e' }}>
                УДАЛИТЬ
            </Text>
        </TouchableOpacity>
    )
}