import React from "react";
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../Redux/storeType";
import {AddMessageFormRedux, AddMessageFormType} from "./AddMessageForm/AddMessageForm";

export type DialogsType = {
    dialogsPage: DialogPageType
    sendMessage: (newMessageBody:string) => void
    isAuth: boolean
}



export const Dialogs: React.FC<DialogsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>)


    let addNewMessage = (values:AddMessageFormType) => {
        props.sendMessage(values.newMessageBody);
    }

   // if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

