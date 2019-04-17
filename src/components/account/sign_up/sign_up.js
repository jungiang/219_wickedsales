import React from 'react';
import SignUpForm from './sign_up_form';

class SignUp extends React.Component {
    handleSignUp(values){
        console.log(values);
    }
    render() {
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <SignUpForm signUp={this.handleSignUp}/>
            </div>
        )
    }
}

export default SignUp;