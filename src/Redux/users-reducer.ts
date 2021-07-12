import {
    FollowACType,
    SetCurrentPageACType, setTotalUsersCountACType,
    SetUsersACType,
    UnfollowACType,
    UsersStateType,
    UserType
} from "./storeType";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

export type ActionsTypes = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | setTotalUsersCountACType

export const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowACType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: number): UnfollowACType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: UserType[]): SetUsersACType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (currentPage:number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCountAC = (totalCount:number): setTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count:totalCount
    }
}