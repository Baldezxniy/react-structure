import { View } from "react-native"
import { Link } from "react-router-native"
import CheckedMessage from "./CheckedMessage"
import LastMessage from "./LastMessage"
import LastMessageTime from "./LastMessageTime"
import UserImg from "./UserImg"
import UserName from "./UserName"
import {AntDesign} from 'react-native-vector-icons'
import { stylesUserItemLIst } from "../../styles/userListStyles"


const UserListItem = () => {
    return (
        <Link to='/chat'>
            <View>
                <View style={stylesUserItemLIst.item__container}>
                    <UserImg />
                    <View style={{ flexGrow: 1 }} >
                        <View style={stylesUserItemLIst.item__name}>
                            <UserName />
                            <View style={{flexDirection:'row'}}>
                                <CheckedMessage />
                                <LastMessageTime />

                            </View>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <LastMessage />
                            <View style={stylesUserItemLIst.item__pushpin}>
                                <AntDesign name='pushpin' style={stylesUserItemLIst.pushpin} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Link>
    )
}

export default UserListItem