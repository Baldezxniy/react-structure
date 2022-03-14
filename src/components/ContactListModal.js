import { Text, View } from "react-native"
import { FontAwesome5, Ionicons, Foundation } from 'react-native-vector-icons'


export const ContactListModal = () => {
    const listItem = [
        { id: 1, title: 'Создать группу', Icon: FontAwesome5, nameIcon: 'user-friends' },
        { id: 2, title: 'Создать секретный чат', Icon: Ionicons, nameIcon: 'md-lock-closed' },
        { id: 3, title: 'Создать канал', Icon: Foundation, nameIcon: 'megaphone' }
    ]


    return (
        <View>
            {listItem.map(item => (
                <ContactListItem key={item.id} title={item.title} Icon={item.Icon} nameIcon={item.nameIcon} />
            ))}
        </View>
    )
}


const ContactListItem = ({ title, Icon, nameIcon, }) => (
    <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', paddingLeft: 15 }}>
        <View >
            <Icon name={nameIcon} style={{ fontSize: 18, marginRight: 30 }} />
        </View>
        <View>
            <Text style={{ fontSize: 17 }}>
                {title}
            </Text>
        </View>
    </View>
)