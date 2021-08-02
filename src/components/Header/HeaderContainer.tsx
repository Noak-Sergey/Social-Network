import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
}
type OwnProsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {}
type HeaderAPIContainerType = RouteComponentProps<PathParamsType> & OwnProsType

class HeaderAPIContainer extends React.Component<HeaderAPIContainerType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
    }

    render() {
        return <Header {...this.props}
                       isAuth={this.props.isAuth}
                       login={this.props.login}
                       userId={this.props.userId}
                       email={this.props.email}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        userId:state.auth.userId
    }
}

let WithUrlDataContainerComponent = withRouter(HeaderAPIContainer)

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(WithUrlDataContainerComponent)