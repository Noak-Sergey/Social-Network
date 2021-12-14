import {ActionsTypes, PostsType} from "./storeType";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';


export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export type setStatusType = {
    type: typeof SET_STATUS
    status: string
}

export type deletePostActionType = {
    type: typeof DELETE_POST
    id: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType | null
    status: string
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
    profile: null as ProfileType | null,
    status: '',
};

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};

        case SET_STATUS:
            return {...state, status: action.status};

        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string): AddPostActionType => ({
    type: ADD_POST,
    newPostText: newPostText
} as const)

export const setUserProfile = (profile: ProfileType): setUserProfileType => ({type: SET_USER_PROFILE, profile} as const)

export const setStatus = (status: string): setStatusType => ({type: SET_STATUS, status} as const)

export const deletePostActionCreator = (id: number) => ({type: DELETE_POST, id} as const)

export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

