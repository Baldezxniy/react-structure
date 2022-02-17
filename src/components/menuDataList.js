import { FontAwesome5, Ionicons, Feather, EvilIcons } from 'react-native-vector-icons'

export const menuDataList = [
    {
        id: 1,
        title: "main.menu.group",
        Icon: FontAwesome5,
        iconName: 'user-friends',
        path: '/'
    },
    {
        id: 2,
        title: "main.menu.contacts",
        Icon: FontAwesome5,
        iconName: 'user',
        path: '/'

    },
    {
        id: 3,
        title: "main.menu.calls",
        Icon: Ionicons,
        iconName: 'ios-call-outline',
        path: '/'

    },
    {
        id: 4,
        title: "main.menu.peopleNearby",
        Icon: FontAwesome5,
        iconName: 'user',
        path: '/'

    },
    {
        id: 5,
        title: "main.menu.savedMessages",
        Icon: Feather,
        iconName: 'bookmark',
        path: '/'

    },
    {
        id: 6,
        title: "main.menu.settings",
        Icon: Ionicons,
        iconName: 'ios-settings-outline',
        path: '/setting'
    },
    {
        id: 7,
        title: "main.menu.inviteFriends",
        Icon: Feather,
        iconName: 'user-plus',
        path: '/',
    },
    {
        id: 8,
        title: "main.menu.telegramFeatures",
        Icon: EvilIcons,
        iconName: 'question',
        path: '/'

    }
]

