import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {PostsType} from "../../Redux/storeType";


type ProfileAPIContainerComponentProps = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType | null
    newPostText:string
    posts: Array<PostsType>
}
type ProfileAPIContainerStateType = {

}

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerComponentProps, ProfileAPIContainerStateType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     newPostText={this.props.newPostText}
                     posts={this.props.posts}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer)

export default ProfileContainer;

