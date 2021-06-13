import React from "react";
import {usersPageType} from "../../Redux/users-reducer";
import styles from './users.module.css'


export let Users = (props: usersPageType) => {
    if(props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://i.pinimg.com/736x/b5/86/c7/b586c77f82e862925bf6b2beedfc490c.jpg',
                    followed: false,
                    fullName: 'Almaz',
                    status: 'I am a Cat',
                    location: {city: 'Anapa', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqXrMsfxcXhufZLVImndbRXYT81wVLiXfGg&usqp=CAU',
                    followed: true,
                    fullName: 'Semen',
                    status: 'I am a Dog',
                    location: {city: 'Yablonovsky', country: 'Adigeya'}
                },
                {
                    id: 3,
                    photoUrl: 'https://avatarfiles.alphacoders.com/224/224801.jpg',
                    followed: false,
                    fullName: 'Fedor',
                    status: 'I am a Cat',
                    location: {city: 'Krasnodar', country: 'Russia'}
                },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}