import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    UNFOLLOW,
    TOGGLE_IS_FETCHING
} from "./users-reducer";
import {AddPostActionType, setUserProfileType, UpdateNewPostTextActionType} from "./profile-reducer";


export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | NewMessageBody | SendMessage |
    FollowACType | UnfollowACType | SetUsersACType | setUserProfileType



export type NewMessageBody = {
    type: 'NEW-MESSAGE-BODY'
    body: string
}
export type SendMessage = {
    type: 'SEND-MESSAGE'
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
    newMessageBody: string
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
}

export type FollowACType = {
    type:  typeof FOLLOW
    userId: number
}
export type UnfollowACType = {
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