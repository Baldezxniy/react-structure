import { memo } from "react";
import { Image, TouchableHighlight, Vibration, View } from "react-native";
import { userStyle } from "../../styles/userStyles";
import { FontAwesome5 } from 'react-native-vector-icons'
const UserProfileImg = memo(({ img, id, setMessageArr, messageArr }) => {

    return (
        <TouchableHighlight
            onLongPress={() => {
                if (!messageArr.includes(id)) {
                    setMessageArr(prev => [...prev, id])
                    Vibration.vibrate(50)
                } else if (messageArr.includes(id)) {
                    setMessageArr(prev => prev.filter(item => item !== id))
                    Vibration.vibrate(50)
                }
            }}

            onPress={() => {
                if (messageArr.length >= 1) {
                    if (!messageArr.includes(id)) {
                        setMessageArr(prev => [...prev, id])
                    } else if (messageArr.includes(id)) {
                        setMessageArr(prev => prev.filter(item => item !== id))
                    }
                }
            }}

            underlayColor='none' style={[userStyle.list__img__item, { height: 95, justifyContent: "center", alignItems: "center", position: 'relative' }]}>
            <>
                <Image style={{ width: messageArr.includes(id) ? '85%' : '100%', height: messageArr.includes(id) ? '85%' : '100%' }} source={{ uri: img }} />
                {messageArr.includes(id) ? <View style={{ position: "absolute", right: 0, top: 0, width: 18, height: 18, borderRadius: 50, backgroundColor: '#00ff2a', justifyContent: 'center', alignItems: 'center', zIndex: 100 }}>
                    <FontAwesome5 name='check' style={{ fontSize: 10.5 }} />
                </View> : <></>}
            </>
        </TouchableHighlight>
    )
})

export default UserProfileImg