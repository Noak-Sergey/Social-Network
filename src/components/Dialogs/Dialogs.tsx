import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/store";

type DialogsType = {
    dialogsPage:DialogPageType
    updateNewMessageBody:(body:string) => void
    sendMessage:() => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d =>  <DialogItem key={d.id} name={d.name} id={d.id}/> )
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = ()=> {
        props.sendMessage();
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.target.value;
       props.updateNewMessageBody(body);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={c.messages}>
                { messagesElements }
            </div>
            <div>
            <textarea value={newMessageBody} onChange={onNewMessageChange}></textarea>
            </div>
            <div>
            <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}