import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
    }
);

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export type StoreType = typeof store

export let store = createStore(reducers);

export type AppDispatchType = typeof store.dispatch

export type RootStateType = ReturnType<ReducersType>