import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {PostsType} from "../../Redux/storeType";
import {RouteComponentProps, withRouter } from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType | null
    newPostText: string
    posts: Array<PostsType>
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}
type ProfileAPIContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
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

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

export default ProfileContainer;

