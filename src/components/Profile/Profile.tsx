import React from "react";
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";

type ProfileType = {
    profilePage: ProfilePageType
    //addPost:(postMessage:string) => void
    //updateNewPostText:(newText:string) => void
    dispatch: (action:ActionsTypes) => void
}

const Profile: React.FC<ProfileType> = (props) => {


    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
                 />
    </div>
}

export default Profile;