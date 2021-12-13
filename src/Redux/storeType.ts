import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    UNFOLLOW,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "./users-reducer";
import {AddPostActionType, deletePostActionType, setStatusType, setUserProfileType} from "./profile-reducer";


export type ActionsTypes = AddPostActionType | NewMessageBodyType | SendMessageType |
    FollowSuccessACType | UnfollowSuccessACType | SetUsersACType | setUserProfileType | setStatusType | deletePostActionType

export type NewMessageBodyType = {
    type: 'NEW-MESSAGE-BODY'
    body: string
}
export type SendMessageType = {
    type: 'SEND-MESSAGE'
    newMessageBody:string
}

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export type SidebarType = {}

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    photos: { small: string, large: string }
    name: string
    status: string
    location: { city: string, country: string }
}

export type UsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount:number
    currentPage:number
    isFetching: boolean
    followingInProgress: number[]
}

export type FollowSuccessACType = {
    type:  typeof FOLLOW
    userId: number
}
export type UnfollowSuccessACType = {
    type:  typeof UNFOLLOW
    userId: number
}
export type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count:number
}
export type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
export type ToggleIsFollowingInProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId:number
}
