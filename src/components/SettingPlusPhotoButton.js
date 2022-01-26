import { memo } from "react";
import { View } from "react-native";
import {Ionicons} from 'react-native-vector-icons' 

const SettinPlusPhotoButton = memo((props) => {
    return (
        <View style={styles.info__message}>
            <Ionicons name='ios-camera-outline' style={{ fontSize: 27 }} />
        </View>
    )
})

export default SettinPlusPhotoButton