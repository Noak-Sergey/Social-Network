import React from "react";


type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
    state = {
        editMode: false
    }

    activateEditmode = () => {
        this.setState({editMode:true})
    }
    deactivateEditmode = () => {
        this.setState({editMode:false})
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditmode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                     <input autoFocus={true} onBlur={this.deactivateEditmode} value={this.props.status}/>
                    </div>
                }
            </>
        )
    }
}
