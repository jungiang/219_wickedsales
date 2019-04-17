import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignInForm = props => {
    const { handleSubmit, signIn } = props;
    return (
        <form onSubmit={handleSubmit(signIn)}>
            <div className="row">
                <Field col="s12" id="email" name="email" component={Input} type="text" label="Email" />
            </div>
            <div className="row">
                <Field col="s12" id="password" name="password" component={Input} type="password" label="Password" />
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Sign In</button>
                </div>
            </div>
        </form>
    )
}

function validate({email, password}){
    const errors = {};
    if(!email){
        errors.email = 'Please enter your email';
    }

    if(!password){
        errors.password = 'Please enter your password';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-in-form',
    validate
})(SignInForm);