import React from "react";
import c from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../Redux/redux-store";

type ProfileType = {
    store: StoreType
}

const Profile: React.FC<ProfileType> = (props) => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
    </div>
}

export default Profile;