import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";
import {ActionsTypes} from "../../../Redux/storeType";

let mapStateToProps = (state:RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

type mapDispatchToPropsType = {
    updateNewPostText:(value:string) => void
    addPost:(value:string) => void
}

let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void):mapDispatchToPropsType => {
    return {
        updateNewPostText:(value:string) => {
            let action = onPostChangeActionCreator(value)
            dispatch(action);
        },
        addPost: (value: string) => {
            dispatch(addPostActionCreator(value));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

