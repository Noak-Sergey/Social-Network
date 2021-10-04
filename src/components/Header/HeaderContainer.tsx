import React from 'react';
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthStateType, getAuthUserData, logout, ThunkDispatchType} from "../../Redux/auth-reducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
type OwnProsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {}
type HeaderAPIContainerType = RouteComponentProps<PathParamsType> & OwnProsType

class HeaderAPIContainer extends React.Component<HeaderAPIContainerType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
                       userId={this.props.userId}
                       email={this.props.email}
                       logout={this.props.logout}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId: state.auth.userId
    }
}

let WithUrlDataContainerComponent = withRouter(HeaderAPIContainer)

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData,logout })(WithUrlDataContainerComponent)
