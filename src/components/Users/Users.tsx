import React from "react";
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import axios from "axios";
import {UserType} from "../../Redux/storeType";


type UsersProps = {
    users: Array<UserType>
    follow?: (id: number) => void
    unfollow: (userId:number) => void
    setUsers:  (users:UserType[]) => void
}

type UsersComponentStateType = {
    asd: number
}

class Users extends React.Component<UsersProps, UsersComponentStateType> {

    constructor(props: UsersProps) {
        super(props);
        this.state = {
            asd: 0
        };
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        return <div onClick={() => {this.setState({asd: this.state.asd + 1})}} >
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                if (this.props.follow) {
                                    this.props.follow(u.id)
                                }
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;