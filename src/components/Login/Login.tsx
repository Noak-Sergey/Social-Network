import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";
import s from "../common/FormsControls/FormsControls.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginType = {
    isAuth:boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={"checkbox"}/> remember me
            </div>
            {props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = (props:LoginType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
type MapStatePropsType = {
    isAuth:boolean
}
const mapStateToProps = (state:AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = connect (mapStateToProps,{login})(Login)