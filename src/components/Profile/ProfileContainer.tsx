import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfile, ProfileType} from "../../Redux/profile-reducer";
import {PostsType} from "../../Redux/storeType";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type MapStatePropsType = {
    profile: ProfileType | null
    newPostText: string
    posts: Array<PostsType>
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId:string) => void
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
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
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
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileAPIContainer);

const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)

export default ProfileContainer;

