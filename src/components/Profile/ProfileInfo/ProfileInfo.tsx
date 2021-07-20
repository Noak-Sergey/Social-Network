import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";


type ProfileInfoType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img src={'https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'} alt={'Profile photo'}/>
        </div>
        <div className={c.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava+description
        </div>
    </div>
}

