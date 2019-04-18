import React from 'react';
import {connect} from 'react-redux'
import SignInForm from './sign_in_form';
import {signIn} from '../../../actions';

class SignIn extends React.Component {
    handleSignIn = (values) =>{
        console.log(values);
        this.props.signIn(values);
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

// function mapToStateToProps(){

// }

export default connect(null, {
    signIn
})(SignIn);