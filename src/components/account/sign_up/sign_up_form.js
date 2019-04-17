import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from '../../general/input';

const SignUpForm = props => {
    const { handleSubmit, signUp } = props;
    return (
        <form onSubmit={handleSubmit(signUp)}>
            <div className="row">
                <Field col="s12" id="name" name="name" component={Input} type="text" label="Name" />
            </div>
            <div className="row">
                <Field col="s12" id="email" name="email" component={Input} type="text" label="Email" />
            </div>
            <div className="row">
                <Field col="s12" id="password" name="password" component={Input} type="password" label="Password" />
            </div>
            <div className="row">
                <Field col="s12" id="reEnterPassword" name="reEnterPassword" component={Input} type="password" label="Re-Enter Password" />
            </div>
            <div className="row">
                <div className="col s12 right-align">
                    <button className="btn purple darken-2">Sign Up</button>
                </div>
            </div>
        </form>
    )
}

function validate({ name, email, password, reEnterPassword }) {
    const errors = {};

    if (!name) {
        errors.name = 'Please enter your name';
    }

    if (!email) {
        errors.email = 'Please enter your email';
    }

    if (!password) {
        errors.password = 'Please enter your password';
    }

    if (!reEnterPassword) {
        errors.reEnterPassword = 'Please re-enter your password';
    }

    return errors;
}

export default reduxForm({
    form: 'sign-up-form',
    validate
})(SignUpForm);