import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {StoreType} from "../../Redux/redux-store";

type ProfileType = {
    //store: StoreType
}

const Profile: React.FC<ProfileType> = (props) => {


    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;