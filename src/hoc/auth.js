import React from 'react';
import {connect} from 'react-redux';

export default function(WrappedComponent, to = '/account/sign-in', requireAuth = true){
    class Auth extends React.Component {
        componentDidMount(){
            this.checkAuth();
        }
        componentDidUpdate(){
            this.checkAuth();
        }
        checkAuth(){
            if(this.props.auth !== requireAuth){
                this.props.history.push(to);
            }
        }
        render(){
            console.log(this.props);
            return <WrappedComponent {...this.props}/>;
        }
    }
    const mapStateToProps = state => {
        return {
            auth: state.user.auth
        }
    }
    return connect(mapStateToProps)(Auth);
}

