import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export type AuthStateType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type ActionsTypes = SetAuthUserDataACType

export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

type SetAuthUserDataACType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: string | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

const setAuthUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataACType => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login,} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkType =>
    async (dispatch: ThunkDispatchType) => {

        let response = await authAPI.login(email, password, rememberMe);

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            // @ts-ignore
            dispatch(stopSubmit('login', {_error: message}));
        }
    }

export const logout = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
