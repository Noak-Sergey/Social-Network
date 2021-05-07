import React from "react";
import c from './Post.module.css';

type PostType = {
    message:string
    likesCount: number
}

const Post: React.FC<PostType> = (props) => {
    return (
    <div className={c.item}>
        <img
            src='https://images.unsplash.com/photo-1445820200644-69f87d946277?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        {props.message}
        <div>
        <span>like </span> {props.likesCount}

        </div>
    </div>
    )
}
export default Post;