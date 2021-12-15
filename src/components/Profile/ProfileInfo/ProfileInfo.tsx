import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHook";


type ProfileInfoType = {
    profile: ProfileType | null
    status:string
    updateStatus: (status:string) => void
}

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return <div>
        <div className={c.descriptionBlock}>
            <img src={props.profile.photos.large} />
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            ava+description
        </div>
    </div>
}

