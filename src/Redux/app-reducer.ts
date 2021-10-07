import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

export type InitializedType = {
    initialized: boolean
}

type ActionsTypes = InitializedSuccessACType

export const appReducer = (state: InitializedType = initialState, action: ActionsTypes): InitializedType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

type InitializedSuccessACType = {
    type: typeof INITIALIZED_SUCCESS
}

const initializedSuccess = (): InitializedSuccessACType => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>
export type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => (dispatch: ThunkDispatchType) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });


}


