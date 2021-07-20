import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../Redux/profile-reducer";


const Profile: React.FC<ProfilePageType> = (props) => {
    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;