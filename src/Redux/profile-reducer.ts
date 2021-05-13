import {ActionsTypes, AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextActionType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 5},
            {id: 2, message: 'It\'s my first post', likesCount: 23},
            {id: 3, message: 'It\'s my second post', likesCount: 1},
            {id: 4, message: 'blabla', likesCount: 15},
        ],
        newPostText: '',
    };

export const profileReducer = (state: ProfilePageType = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => {

    return {
        type: ADD_POST,
        newPostText: newPostText
    } as const
}

export const onPostChangeActionCreator = (newText: string):UpdateNewPostTextActionType => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}