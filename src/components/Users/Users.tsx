import React from "react";
import {UserType} from "../../Redux/storeType";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";

type UsersProps = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: number[]
}

export let Users = (props: UsersProps) => {

    return <div>
        <Paginator currentPage={props.currentPage} pageSize={props.pageSize}
                   onPageChanged={props.onPageChanged} totalItemsCount={props.totalUsersCount}/>
        <div>
        {props.users.map(u => <User key={u.id}
                                    user={u}
                                    followingInProgress={props.followingInProgress}
                                    follow={props.follow}
                                    unfollow={props.unfollow}/>)}
        </div>
    </div>
}