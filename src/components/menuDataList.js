import { FontAwesome5, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons'

export const menuDataList = [
    {
        id: 1,
        title: 'Создать группу',
        Icon: FontAwesome5,
        iconName: 'user-friends',
        path: '/'
    },
    {
        id: 2,
        title: 'Контакты',
        Icon: FontAwesome5,
        iconName: 'user',
        path: '/'

    },
    {
        id: 3,
        title: 'Звонки',
        Icon: Ionicons,
        iconName: 'ios-call-outline',
        path: '/'

    },
    {
        id: 4,
        title: 'Люди рядом',
        Icon: FontAwesome5,
        iconName: 'user',
        path: '/'

    },
    {
        id: 5,
        title: 'Избранное',
        Icon: Feather,
        iconName: 'bookmark',
        path: '/'

    },
    {
        id: 6,
        title: 'Настройки',
        Icon: Ionicons,
        iconName: 'ios-settings-outline',
        path: '/setting'
    },
    {
        id: 7,
        title: 'Добавить друзей',
        Icon: Feather,
        iconName: 'user-plus',
        path: '/',
    },
    {
        id: 8,
        title: 'Возможности Telegram',
        Icon: EvilIcons,
        iconName: 'question',
        path: '/'

    }
]
