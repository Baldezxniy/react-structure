import { Fontisto, Feather, MaterialCommunityIcons, MaterialIcons, Ionicons, EvilIcons } from 'react-native-vector-icons'

export const SETTING_DATA = [
    {
        id: 1,
        title: "setting.settings.notification",
        Icon: Fontisto,
        iconName: 'bell',
        modal: null,
        border: true
    },
    {
        id: 2,
        title: "setting.settings.private",
        Icon: Feather,
        iconName: 'lock',
        modal: null,
        border: true

    },
    {
        id: 3,
        title: "setting.settings.data",
        Icon: MaterialCommunityIcons,
        iconName: 'clock-time-three-outline',
        modal: 'language',
        border: true
    },
    {
        id: 4,
        title: "setting.settings.chat",
        Icon: Ionicons,
        iconName: 'chatbubble-outline',
        modal: null,
        border: true
    },
    {
        id: 5,
        title: "setting.settings.folders",
        Icon: Feather,
        iconName: 'folder',
        modal: null,
        border: true

    },
    {
        id: 6,
        title: "setting.settings.devices",
        Icon: MaterialIcons,
        iconName: 'devices',
        modal: null,
        border: true

    },
    {
        id: 7,
        title: "setting.settings.language",
        Icon: MaterialIcons,
        iconName: 'language',
        modal: 'language',
        border: false

    },
    {
        id: 8,
        title: "setting.help.ask",
        Icon: Ionicons,
        iconName: 'chatbubble-ellipses-outline',
        modal: null,
        border: true

    },
    {
        id: 9,
        title: "setting.help.telegram",
        Icon: EvilIcons,
        iconName: 'question',
        modal: null,
        border: true
    },
    {
        id: 10,
        title: "setting.help.private",
        Icon: MaterialCommunityIcons,
        iconName: 'shield-check-outline',
        modal: null,
        border: false

    }
]