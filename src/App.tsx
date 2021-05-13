import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {ActionsTypes} from "./Redux/store";
import {StoreType} from "./Redux/redux-store";

type AppType = {
    store: StoreType
    //state: RootStateType
    //addPost: (postMessage: string) => void
    //updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogsPage={state.dialogsPage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path='/profile'
                           render={() => <Profile
                               profilePage={state.profilePage}
                               dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
