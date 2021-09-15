import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
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