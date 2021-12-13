import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../Redux/storeType";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsType = {
    addPost: (postMessage: string) => void
    posts: PostsType[]
}

type AddNewPostFormType = {
    newPostText:string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newPostText'
                       placeholder='Enter your message'
                       validate={[required,maxLength10,]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form:'profileAddNewPostForm'})(AddNewPostForm)

const MyPosts = React.memo( (props: MyPostsType) => {
    console.log('RENDER YO');

    let postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: AddNewPostFormType) => {
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
})

export default MyPosts;