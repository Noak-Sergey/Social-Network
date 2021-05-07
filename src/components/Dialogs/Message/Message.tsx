import React from "react";
import c from './../Dialogs.module.css'


type MessageType = {
    message: string
}

export const Message: React.FC<MessageType> = (props) => {
    return <div className={c.message}>{props.message}</div>
}

