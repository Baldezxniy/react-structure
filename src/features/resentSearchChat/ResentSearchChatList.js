import { memo } from "react";

import ResentSearchChatItem from "./ResentSearchChatItem";

const ResentSearchChatList = memo(({ resentChats }) => {

    return (
        <>

            {
                resentChats.map(chat => {
                    return <ResentSearchChatItem avatar={chat.avatar} lastName={chat.lastName}
                        chatId={chat.chatId} key={chat.chatId} firstName={chat.firstName}
                        lastName={chat.lastName} online={chat.online} userId={chat.userId} />
                })
            }
        </>
    )
})

export default ResentSearchChatList