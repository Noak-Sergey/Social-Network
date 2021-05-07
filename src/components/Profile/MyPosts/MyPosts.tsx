import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    ActionsTypes,
    PostsType} from "../../../Redux/store";
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";

type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
    //newText:string
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
}



const MyPosts: React.FC<MyPostsType> = (props) => {

    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>();  //Стало не нужным

    let addPost = () => {
        //props.addPost(props.newPostText);
        props.dispatch(addPostActionCreator(props.newPostText));
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let value = e.currentTarget.value
        //if (newPostElement.current) {
        //let text = newPostElement.current.value;    //стало не нужным
        //     props.updateNewPostText(text);
        // }
        // props.updateNewPostText(e.currentTarget.value);
        props.dispatch(onPostChangeActionCreator(value));
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChange}
                          value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;