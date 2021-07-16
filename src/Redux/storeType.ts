import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    UNFOLLOW,
    TOGGLE_IS_FETCHING
} from "./users-reducer";

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type NewMessageBody = {
    type: 'NEW-MESSAGE-BODY'
    body: string
}
export type SendMessage = {
    type: 'SEND-MESSAGE'
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | NewMessageBody | SendMessage |
    FollowACType | UnfollowACType | SetUsersACType
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
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
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
    currentPage:number
}
export type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count:number
}
export type toggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}