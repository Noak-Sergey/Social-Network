import {FollowACType, SetUsersACType, UnfollowACType, UsersStateType, UserType} from "./storeType";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

let initialState = {
        users: []
    };

export type ActionsTypes = FollowACType | UnfollowACType | SetUsersACType

export const usersReducer = (state: UsersStateType = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed:false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users ] }

        default:
            return state;
    }
}

export const followAC = (userId:number): FollowACType => {
    return {
        type: FOLLOW,
        userId
        }
}
export const unfollowAC = (userId:number): UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users:UserType[]): SetUsersACType => {
    return {
        type: SET_USERS,
        users
    }
}