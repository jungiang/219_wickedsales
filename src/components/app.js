import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min'
import '../assets/css/app.scss';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import AccountRoutes from './account';
import ProductRoutes from './products';
import Home from './products/home';
import Nav from './nav';
import NotFound from './404';
import Cart from './cart';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cartItems: 0
        }

        this.updateCartItems = this.updateCartItems.bind(this);
    }
    componentDidMount(){
        this.getCartItemsCount();
    }
    async getCartItemsCount(){
        const resp = await axios.get('/api/getcartitemcount.php');
        this.updateCartItems(resp.data.itemCount);
    }
    updateCartItems(count){
        this.setState({
            cartItems: count
        })
    }
    render(){
        return (
            <div>
                <Nav cartItems={this.state.cartItems}/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/products" render={routingProps=>(
                            <ProductRoutes {...routingProps} updateCart={this.updateCartItems}/>
                            )}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/account" component={AccountRoutes}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        )
    }
} 

export default App;
