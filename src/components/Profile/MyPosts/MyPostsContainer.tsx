import React from "react";
import {addPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../Redux/redux-store";
import {ActionsTypes} from "../../../Redux/storeType";

let mapStateToProps = (state:RootStateType) => {
    return {
        posts: state.profilePage.posts,
    }
}

type mapDispatchToPropsType = {
    addPost:(newPostText:string) => void
}

let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void):mapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

