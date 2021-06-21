import React, {ChangeEvent} from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/storeType";

type MyPostsType = {
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    posts: PostsType[]
    newPostText: string
}

const MyPosts: React.FC<MyPostsType> = (props) => {

    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();  //Стало не нужным

    let onAddPost = () => {
        props.addPost(props.newPostText);
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea ref={newPostElement} onChange={onPostChange}
                          value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;