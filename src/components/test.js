import React from 'react';
import axios from 'axios';

class Test extends React.Component {
    state = {
        message: 'Checking Auth...'
    }
    componentDidMount(){
        this.checkAuth();
    }
    async checkAuth(){
        const resp = await axios.get('/api/test/check_auth.php');
        console.log(resp.data);

        this.setState({
            message: resp.data.auth ? 'You are signed in!' : 'Please sign in'
        })
    }
    signIn = async () => {
        const resp = await axios.get('/api/test/sign_in.php');

        console.log("sign in resp:", resp);

        this.checkAuth();
    }
    signOut = async () => {
        await axios.get('/api/test/sign_out.php');
        this.checkAuth();
    }
    render(){
        return (
            <div>
                <h1 className="center">Test Stuff</h1>
                <h2 className="center">{this.state.message}</h2>
                <div className="center">
                    <button className="btn btn-large" onClick={this.signIn}>Sign In</button>
                    <button className="btn btn-large red" onClick={this.signOut}>Sign Out</button>
                </div>
            </div>
        )
    }
}

export default Test;