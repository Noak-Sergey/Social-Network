import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Route, RouteComponentProps, withRouter, HashRouter } from 'react-router-dom';
//import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { UsersContainer } from "./components/Users/UsersContainer";
//import { ProfileContainer } from "./components/Profile/ProfileContainer";
import { HeaderContainer } from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./Redux/app-reducer";
import { AppStateType } from "./Redux/redux-store";
import { Preloader } from "./components/common/Preloader/Preloader";
//import { LoginContainer } from "./components/Login/LogIn";
import { Provider } from "react-redux";
import { store } from "./Redux/redux-store";
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')
    .then(({ DialogsContainer }) => ({ default: DialogsContainer }))
);

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')
    .then(({ ProfileContainer }) => ({ default: ProfileContainer }))
);

const LoginContainer = React.lazy(() => import('./components/Login/LogIn')
    .then(({ LoginContainer }) => ({ default: LoginContainer }))
);

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}
type OwnProsType = MapStateToPropsType & MapDispatchToPropsType

type PathParamsType = {}

type AppType = RouteComponentProps<PathParamsType> & OwnProsType

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                        render={() => {
                            return <React.Suspense fallback={<Preloader/>}>
                                <DialogsContainer />
                            </React.Suspense>
                        }} />
                    <Route path='/profile/:userId?'
                        render={withSuspense(ProfileContainer)} />
                    <Route path='/users'
                        render={() => <UsersContainer />} />
                    <Route path='/login'
                        render={withSuspense(LoginContainer)} />
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

export const AppContainer = compose<React.ComponentType>(withRouter,
    connect(mapStateToProps, { initializeApp }))(App);


export const SamuraiJSApp = (props: any) => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}