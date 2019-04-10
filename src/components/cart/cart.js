import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Cart extends React.Component {
    getCartData = async ()=>{
        // const resp = axios.get('/api/getcartitem.php')
    }
    render(){
        return (
            <div>
                <h1 className="center">Shopping Cart</h1>
                <Link to="/products">Continue Shopping</Link>
            </div>
        )
    }
}

export default Cart;