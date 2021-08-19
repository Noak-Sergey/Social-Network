import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export const SET_USER_DATA = 'SET_USER_DATA';

let initialState  = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

export type AuthStateType = {
    userId: number | null
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
                ...action.data,
                isAuth:true
            }
        default:
            return state;
    }
}

type SetAuthUserDataACType = {
    type:  typeof SET_USER_DATA
    data: {
        userId:number,
        email:string,
        login:string,
    }
}

const setAuthUserData = (userId:number, email:string, login:string): SetAuthUserDataACType => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
        }
    }
}

export const getAuthUserData = () => (dispatch:Dispatch<ActionsTypes>) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        });
}
