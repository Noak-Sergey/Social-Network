import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../Redux/redux-store";
import StoreContext from "../../../StoreContext";


type MyPostsContainerType = {
    //store: StoreType
}


const MyPostsContainer: React.FC<MyPostsContainerType> = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                let addPost = (value: string) => {
                    store.dispatch(addPostActionCreator(value));
                }

                let onPostChange = (value: string) => {
                    let action = onPostChangeActionCreator(value)
                    store.dispatch(action);
                }

                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
    </StoreContext.Consumer>
}
export default MyPostsContainer;