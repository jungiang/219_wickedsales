import React from 'react';
import { Link } from 'react-router-dom';
import products from '../products';
import Sidenav from './sidenav';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav className="salmon darken-2">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/">Wicked Sales</Link>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/products">products</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Sidenav/>
            </div>
        )
    }
}

export default Nav;