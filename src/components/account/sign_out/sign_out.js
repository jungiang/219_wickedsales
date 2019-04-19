import React from 'react';
import './sign_out';
import {connect} from 'react-redux';
import {signOut} from '../../../actions';

class SignOut extends React.Component {
    componentDidMount(){
        //Action creator for sign out, don't forget connect, see sign-in
        this.props.signOut();
    }
    render() {
        return (
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1 className="center">Thank you for visiting our site</h1>
                    <h2 className="center">You have been signed out</h2>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    signOut
})(SignOut);