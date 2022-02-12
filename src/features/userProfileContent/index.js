import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useUserProfileContent, useUserProfileFolder } from "../../apiHook/useUserProfileContent"
import Music from "../../layout/Music"
import { getLoading } from "../chatHeaderContent/chatHeaderSelector"
import FolderList from "./FolderList"
import { getContent, getFolders } from "./userProfileContentSelector"
import { getContentTC } from "./userProfileContentSlice"
import UserProfileImgList from "./UserProfileImgeList"

const UserProfileContent = ({ userName }) => {

    const [isGame, setIsGame] = useState(true)
    const folders = useUserProfileFolder()
    const content = useUserProfileContent()



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContentTC({ content, folders }))
    }, [])
    const contentState = useSelector(getContent)
    const foldersState = useSelector(getFolders)
    const loading = useSelector(getLoading)

    const [photoArr, setPhotoArr] = useState([])
    return (
        <>
            {
                loading ?
                    <>
                        <FolderList userName={userName} folders={foldersState} photoArr={photoArr} setPhotoArr={setPhotoArr} />
                        {
                            isGame
                                ? <Music />
                                :
                                <></>}
                        <UserProfileImgList content={contentState} setPhotoArr={setPhotoArr} photoArr={photoArr} />
                    </>
                    :
                    <></>
            }
        </>
    )
}

export default UserProfileContent