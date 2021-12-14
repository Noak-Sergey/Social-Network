import React from "react";
import styles from './FormsControls.module.css'
import {WrappedFieldProps} from "redux-form";

const FormControl: React.FC<WrappedFieldProps> = ({input, meta:{touched, error},children}) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const{input,  ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/> </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const{input, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}