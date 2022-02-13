import { memo } from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { ModalPhotoList } from "../../components/ModalPhotoLIst";
import { useState } from 'react'

const UserProfileDataAvatar = memo(({ avatar }) => {
    const [photoModal, setPhotoModal] = useState(false)
    const closeModal = () => { setPhotoModal(false) }
    const openModal = () => { setPhotoModal(true) }
    return (
        <>
            <ModalPhotoList photoModal={photoModal} closeModal={closeModal} />
            <TouchableHighlight underlayColor='none' onPress={openModal} >

                <Image style={{ width: 60, height: 60, borderRadius: 50 }} source={{ uri: avatar }} />
            </TouchableHighlight>
        </>

    )
})

export default UserProfileDataAvatar