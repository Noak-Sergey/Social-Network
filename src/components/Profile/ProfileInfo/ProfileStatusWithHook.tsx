import React, {ChangeEvent, useState} from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusType> = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState( props.status);

   const activateEditMode = () => {
       setEditMode(true)
   }

   const deactivateEditMode = () => {
       setEditMode(false);
       props.updateStatus(status);
   }

   const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
       setStatus(e.currentTarget.value)
   }

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} > {props.status || 'Double click here'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode} value={status} />
            </div>
            }
        </>
    )
}
