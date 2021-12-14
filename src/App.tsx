import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, RouteComponentProps, withRouter} from 'react-router-dom';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import {LoginContainer} from "./components/Login/LogIn";

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type OwnProsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {}

type AppType = RouteComponentProps<PathParamsType> & OwnProsType

class AppContainer extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>
                    </div>
                </div>

        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export const App = compose<React.ComponentType>(withRouter,
    connect(mapStateToProps, {initializeApp}))(AppContainer);
