import {ActionsTypes, PostsType} from "./storeType";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';


export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export type setStatusType = {
    type: typeof SET_STATUS
    status:string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
    status : string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: { github: string, vk: string, facebook: string, instagram: string, twitter: string, website: string, youtube: string, mainLink: string }
    photos: { small: string, large: string }
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'It\'s my second post', likesCount: 1},
        {id: 4, message: 'blabla', likesCount: 15},
    ],
    newPostText: '',
    profile: null as ProfileType | null,
    status: '',
};

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({
    type: ADD_POST,
    newPostText: newPostText
} as const)

export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile} as const)

export const setStatus = (status: string): setStatusType =>({type: SET_STATUS, status} as const)

export const onPostChangeActionCreator = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export const getUserProfile = (userId: string) => (dispatch:Dispatch<ActionsTypes>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId: string) => (dispatch:Dispatch<ActionsTypes>) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status: string) => (dispatch:Dispatch<ActionsTypes>) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}

