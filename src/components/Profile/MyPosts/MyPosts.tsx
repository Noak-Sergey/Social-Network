import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/storeType";
import {InjectedFormProps, Field, reduxForm} from "redux-form";

type MyPostsType = {
    addPost: (postMessage: string) => void
    posts: PostsType[]
}

type AddNewPostFormType = {
    newPostText:string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form:'profileAddNewPostForm'})(AddNewPostForm)

const MyPosts: React.FC<MyPostsType> = (props) => {

    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values:AddNewPostFormType) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;