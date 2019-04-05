import React from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }
    render() {
        return (
            <ul ref={(element)=>{this.sidenav = element}} id="sidenav" className="sidenav">
                {this.props.links}
            </ul>
        )
    }
}

export default Sidenav;