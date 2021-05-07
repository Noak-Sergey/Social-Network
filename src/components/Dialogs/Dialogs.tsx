import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogPageType} from "../../Redux/store";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";

type DialogsType = {
    //state: DialogPageType
    dialogsPage:DialogPageType
    dispatch: (action:ActionsTypes) => void
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map( d =>  <DialogItem key={d.id} name={d.name} id={d.id}/> )
    let messagesElements = props.dialogsPage.messages.map( m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    let sendMessage = ()=> {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       let body = e.target.value;
       props.dispatch(updateNewMessageBodyCreator(body))
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
            <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}