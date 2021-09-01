import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../Redux/profile-reducer";
import {PostsType} from "../../Redux/storeType";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    profile: ProfileType | null
    newPostText: string
    posts: Array<PostsType>
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
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
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        status: state.profilePage.status
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileAPIContainer)



