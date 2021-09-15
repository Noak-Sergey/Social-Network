import React from "react";
import {sendMessageCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/redux-store";
import {ActionsTypes} from "../../Redux/storeType";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state:RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type MapDispatchToPropsType = {
    sendMessage:(newMessageBody:string) => void
}

let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void):MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody:string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

