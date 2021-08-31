import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfile, ProfileType} from "../../Redux/profile-reducer";
import {PostsType} from "../../Redux/storeType";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
    newPostText: string
    posts: Array<PostsType>
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}
export type ProfileAPIContainerType = RouteComponentProps<PathParamsType> & OwnPropsType

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
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
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)



