import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profile: any;
    status: string
    updateStatus: any // func
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return <div>

        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;