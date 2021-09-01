import React, {ChangeEvent} from "react";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditmode = () => {
        this.setState({editMode: true});
    }
    deactivateEditmode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditmode}>{this.props.status || 'Double click here' }</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditmode}
                           value={this.state.status}/>
                </div>
                }
            </>
        )
    }
}
