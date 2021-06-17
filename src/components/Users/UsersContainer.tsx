import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, userType} from "../../Redux/users-reducer";


let mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

type mapDispatchToPropsType = {
    follow:(userId:number)=>void
    unfollow:(userId:number)=>void
    setUsers:(users:userType)=>void
}

let mapDispatchToProps = (dispatch:(action:any)=>void ) => {
    return {
        follow: (userId:number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId:number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users:userType) => {
            dispatch(setUsersAC(users));
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;