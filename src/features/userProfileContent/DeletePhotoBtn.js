import { Text, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { deleteContentTC } from "./userProfileContentSlice"
import { useTranslation } from 'react-i18next';

export const DeletePhotoBtn = ({ messageArr, setMessageArr }) => {
    const { t } = useTranslation();

    const dispatch = useDispatch()

    const handleDeleteMessage = () => {
        dispatch(deleteContentTC(messageArr))
        setMessageArr([])
    }

    return (
        <TouchableOpacity onPress={handleDeleteMessage} style={{ borderRadius: 5, borderColor: '#fa143e', borderWidth: 0.5, padding: 5 }}>
            <Text style={{ color: '#fa143e' }}>
                {t('modalDeleteMessage.button2')}
            </Text>
        </TouchableOpacity>
    )
}