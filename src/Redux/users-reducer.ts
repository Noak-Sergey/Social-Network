import {
    FollowSuccessACType,
    SetCurrentPageACType,
    SetTotalUsersCountACType,
    SetUsersACType,
    UnfollowSuccessACType,
    UsersStateType,
    UserType,
    ToggleIsFetchingACType, ToggleIsFollowingInProgressACType,
} from "./storeType";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export type ActionsTypes =
    FollowSuccessACType
    | UnfollowSuccessACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingInProgressACType

export const usersReducer = (state: UsersStateType = initialState, action: ActionsTypes): UsersStateType => {
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number): FollowSuccessACType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowSuccess = (userId: number): UnfollowSuccessACType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users: UserType[]): SetUsersACType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountACType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount
    }
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleIsFollowingInProgress = (followingInProgress: boolean, userId: number): ToggleIsFollowingInProgressACType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId,
    }
}


export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        });
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleIsFollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleIsFollowingInProgress(false, userId));
            });
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<ActionsTypes>) => {
        dispatch(toggleIsFollowingInProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleIsFollowingInProgress(false, userId));
            });
    }
}