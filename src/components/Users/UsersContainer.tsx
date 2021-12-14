import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleIsFollowingInProgress, requestUsers, follow, unfollow
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {UserType} from "../../Redux/storeType";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress, getUsersSuperSelector,
} from "../../Redux/users-selectors";

type UsersAPIComponentProps = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (userId: number) => void
    // unfollowSuccess: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

type UsersComponentStateType = {
    asd: number
}

export class UsersAPIComponent extends React.Component<UsersAPIComponentProps, UsersComponentStateType> {

    constructor(props: UsersAPIComponentProps) {
        super(props);
        this.state = {
            asd: 0
        };
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
                   />
        </>
    }
}

// let mapStateToProps = (state: AppStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


// let withRedirect = withAuthRedirect(UsersAPIComponent)

// export const UsersContainer = connect(mapStateToProps,
//     {followSuccess, unfollowSuccess, setCurrentPage, toggleIsFollowingInProgress, getUsers })(withRedirect)
export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleIsFollowingInProgress, getUsers: requestUsers })
)(UsersAPIComponent)