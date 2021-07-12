import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users from "./Users";
import {AppDispatchType, AppStateType} from "../../Redux/redux-store";
import {UserType} from "../../Redux/storeType";


let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch:AppDispatchType ) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;