import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";

type MyPostsContainerType = {
    store: StoreType
}



const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    let state = props.store.getState();

    let addPost = (value: string) => {
        props.store.dispatch(addPostActionCreator(value));
    }

    let onPostChange = (value: string) => {
        let action = onPostChangeActionCreator(value)
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}/>)
}
export default MyPostsContainer;