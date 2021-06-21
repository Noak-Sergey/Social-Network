import {RootStateType} from "./redux-store";
import {ActionsTypes} from "./storeType";

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

//пример чтоб TypeScript сам определил типизацию
//export type AddPostActionType = ReturnType<typeof addPostActionCreator>

//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', likesCount: 5},
//                 {id: 2, message: 'It\'s my first post', likesCount: 23},
//                 {id: 3, message: 'It\'s my second post', likesCount: 1},
//                 {id: 4, message: 'blabla', likesCount: 15},
//             ],
//             newPostText: '',
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How is your it-kamasutra'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'Yo'},
//                 {id: 5, message: 'Yo'},
//             ],
//
//             newMessageBody:'Write here',
//
//             dialogs: [
//                 {id: 1, name: 'Fedor'},
//                 {id: 2, name: 'Andrey'},
//                 {id: 3, name: 'Sveta'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Viktor'},
//                 {id: 6, name: 'Valera'}
//             ],
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('State was changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;      //наблюдатель (observer - это паттерн)
//     },
//
//     dispatch(action) {              //{ type: 'ADD-POST'}
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber();
//     }
// }

