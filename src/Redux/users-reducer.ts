
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
        users: []
    };

export type usersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status:string
    location:{city:string, country:string }
}
export type usersPageType = {
    users: Array<usersType>
    follow ?: any
    unfollow ?: any
    setUsers ?: any
}

export type followACType = {
    type:'FOLLOW'
    userId: number
}
export type unfollowACType = {
    type:'UNFOLLOW'
    userId: number
}
export type setUsersACType = {
    type:'SET_USERS'
    users: Array<usersType>
}
export type ActionsTypes = followACType | unfollowACType | setUsersACType

export const usersReducer = (state: usersPageType = initialState, action:ActionsTypes) => {
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

export const followAC = (userId:number) => {
    return {
        type: FOLLOW,
        userId
        }
}
export const unfollowAC = (userId:number) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users:usersType) => {
    return {
        type: SET_USERS,
        users

    }
}