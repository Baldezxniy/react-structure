import { memo } from "react";
import { userStyle } from "../../styles/userStyles";


const UserProfileDiscription = memo((props) => {
    return (
        <View style={userStyle.info__item}>
            <View >
                <Text style={{ fontSize: 16 }}>
                    Я Вова из Саратова
                </Text>
            </View>
            <View>
                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: 13, marginTop: 5 }}>
                    О себе
                </Text>
            </View>
        </View>
    )
})

export default UserProfileDiscription