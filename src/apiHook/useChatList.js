export const useChatList = () => {
    return [
        {
            chatId: 'chat-1',
            userId: 2,
            firstName: "Vovik",
            lastName: "",
            avatar: 'https://cdnimg.rg.ru/img/content/218/90/30/TASS_48720531_d_850.jpg',
            online: true,
            message: {
                time: '10:10',
                text: 'Да ну нахуй'
            },
        },
        {
            chatId: 'chat-2',
            userId: 3,
            firstName: "Паша",
            lastName: "Пашиков",
            avatar: 'https://tipik.ru/wp-content/uploads/2019/06/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B0%D0%B2%D1%8B-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C019.jpg',
            online: false,
            message: {
                time: '19:32',
                my: true,
                checked: false,
                text: 'хуй'
            },
        },
        {
            chatId: 'chat-3',
            userId: 3,
            firstName: "BObi",
            lastName: "",
            avatar: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg',
            online: false,
            message: {
                time: '01:32',
                my: true,
                checked: true,
                text: 'блять'
            },
        }

    ]
}