import React from 'react';
import SignInForm from './sign_in_form';

class SignIn extends React.Component {
    handleSignIn(values){
        console.log(values);
    }
    render() {
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <SignInForm signIn={this.handleSignIn}/>
            </div>
        )
    }
}

export default SignIn;