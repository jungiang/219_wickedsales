import React from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
    componentDidMount(){
        console.log('Sidenav Mounted', this.sidenav);
        M.Sidenav.init(this.sidenav);
    }
    render() {
        return (
            <ul ref={(element)=>{this.sidenav = element}} id="sidenav" className="sidenav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
                <li>
                    <Link to="/">Sign In</Link>
                </li>
                <li>
                    <Link to="/">Sign Up</Link>
                </li>
            </ul>
        )
    }
}

export default Sidenav;