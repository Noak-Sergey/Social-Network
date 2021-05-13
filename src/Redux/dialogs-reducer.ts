import {ActionsTypes, DialogPageType, NewMessageBody, SendMessage} from "./store";

const NEW_MESSAGE_BODY = 'NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ],

    newMessageBody: 'Write here',

    dialogs: [
        {id: 1, name: 'Fedor'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body: string): NewMessageBody => {

    return {
        type: NEW_MESSAGE_BODY,
        body: body
    }
}

export const sendMessageCreator = (): SendMessage => {

    return {
        type: SEND_MESSAGE,
    }
}