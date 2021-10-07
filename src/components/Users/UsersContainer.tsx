import React from "react";
import {connect} from "react-redux";
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    toggleIsFollowingInProgress, getUsers
} from "../../Redux/users-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {UserType} from "../../Redux/storeType";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";

type UsersAPIComponentProps = {
    users: Array<UserType>
    followSuccess: (id: number) => void
    unfollowSuccess: (userId: number) => void
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
                   unfollow={this.props.unfollowSuccess}
                   follow={this.props.followSuccess}
                   followingInProgress={this.props.followingInProgress}
                   />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


// let withRedirect = withAuthRedirect(UsersAPIComponent)

// export const UsersContainer = connect(mapStateToProps,
//     {followSuccess, unfollowSuccess, setCurrentPage, toggleIsFollowingInProgress, getUsers })(withRedirect)
export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps,{followSuccess, unfollowSuccess, setCurrentPage, toggleIsFollowingInProgress, getUsers })
)(UsersAPIComponent)