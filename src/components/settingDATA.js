import { Fontisto, Feather, MaterialCommunityIcons, MaterialIcons, Ionicons, EvilIcons } from 'react-native-vector-icons'

export const SETTING_DATA = [
    {
        id: 1,
        title: 'Уведомления и звук',
        Icon: Fontisto,
        iconName: 'bell',
        modal: null,
        border: true
    },
    {
        id: 2,
        title: 'Конфиденциальность',
        Icon: Feather,
        iconName: 'lock',
        modal: null,
        border: true

    },
    {
        id: 3,
        title: 'Данные и память',
        Icon: MaterialCommunityIcons,
        iconName: 'clock-time-three-outline',
        modal: null,
        border: true
    },
    {
        id: 4,
        title: 'Настройки чатов',
        Icon: Ionicons,
        iconName: 'chatbubble-outline',
        modal: null,
        border: true
    },
    {
        id: 5,
        title: 'Папки',
        Icon: Feather,
        iconName: 'folder',
        modal: null
    },
    {
        id: 6,
        title: 'Устройства',
        Icon: MaterialIcons,
        iconName: 'devices',
        modal: null,
        border: true

    },
    {
        id: 7,
        title: 'Язык',
        Icon: MaterialIcons,
        iconName: 'language',
        modal: null,
        border: false

    },
    {
        id: 8,
        title: 'Задать вопрос',
        Icon: Ionicons,
        iconName: 'chatbubble-ellipses-outline',
        modal: null,
        border: true

    },
    {
        id: 9,
        title: 'Вопрос о Telegram',
        Icon: EvilIcons,
        iconName: 'question',
        modal: null,
        border: true
    },
    {
        id: 10,
        title: 'Политика конфиденциальности',
        Icon: MaterialCommunityIcons,
        iconName: 'shield-check-outline',
        modal: null,
        border: false

    }
]