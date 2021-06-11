import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, RootStateType} from "../../Redux/store";


let mapStateToProps = (state:RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mapDispatchToPropsType = {
    updateNewMessageBody:(body:string) => void
    sendMessage:() => void
}

let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void):mapDispatchToPropsType => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);