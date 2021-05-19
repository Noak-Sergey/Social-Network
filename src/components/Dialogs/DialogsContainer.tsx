import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {StoreType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
        dialogsPage={state}/>
    )
}