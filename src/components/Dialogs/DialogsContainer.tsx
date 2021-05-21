import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {StoreType} from "../../Redux/redux-store";
import StoreContext from "../../StoreContext";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    //store: StoreType
}

export const DialogsContainer: React.FC<DialogsContainerType> = () => {


    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage;
            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }
        return <Dialogs updateNewMessageBody={onNewMessageChange}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}/>
    } }
    </StoreContext.Consumer>
}